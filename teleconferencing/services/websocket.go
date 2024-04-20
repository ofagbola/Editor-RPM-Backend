package services

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"sync"
	"time"
	"websocket-chat/constants"
	"websocket-chat/dboperations"
	"websocket-chat/models"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

type WebSocketMessage struct {
	SenderID int `json:"sender_id"`
	Message     string `json:"message"`
	Username    string `json:"username"`
}
type UserConnectionManager struct {
	connections map[string]*websocket.Conn
	mutex       sync.Mutex
}

func NewUserConnectionManager() *UserConnectionManager {

	return &UserConnectionManager{
		connections: make(map[string]*websocket.Conn),
	}
}

func (ucm *UserConnectionManager) AddConnection(userID string, conn *websocket.Conn) {
	ucm.mutex.Lock()
	defer ucm.mutex.Unlock()
	ucm.connections[userID] = conn
	fmt.Println(ucm.connections)
}

func (ucm *UserConnectionManager) RemoveConnection(userID string) {
	ucm.mutex.Lock()
	defer ucm.mutex.Unlock()

	delete(ucm.connections, userID)
}

func (ucm *UserConnectionManager) GetConnection(userID string) *websocket.Conn {
	ucm.mutex.Lock()
	defer ucm.mutex.Unlock()

	return ucm.connections[userID]
}

func (ucm *UserConnectionManager) SendMessage(userID string, message string, db *sql.DB, message_model models.Message,username string, fileContent ...string,) error {
	conn := ucm.GetConnection(userID)
	// save to database
	err:=dboperations.SaveMessageToDb(db, message_model)
	if err != nil {
		fmt.Println(err)
		return  err
	}
	// dboperations.ConnectToDatabase(constants.)
	// connectionString := dboperations.

	if conn == nil {
		fmt.Printf("no connection found for user ID: %s", userID)
		return nil
	} else {

		// Example message
		messageData := WebSocketMessage{
			SenderID: message_model.SenderID,
			Message:     message_model.MessageSent,
			Username:    username,
		}

		// err := conn.WriteMessage(websocket.TextMessage, []byte(message))
		// Convert message to JSON
		jsonMessage, err := json.Marshal(messageData)
		if err != nil {
			log.Println("Error marshaling JSON:", err)
			return err;
		}



	// Send JSON message over WebSocket connection
	err = conn.WriteMessage(websocket.TextMessage, jsonMessage)
		if err != nil {
			fmt.Printf("failed to send message to user ID %s: %s", userID, err.Error())
		}
	}

	// Send the file content as binary data
	// Conditionally send the file content as binary data
	// Conditionally send the file content as binary data
	if len(fileContent) > 0 {
		err := conn.WriteMessage(websocket.TextMessage, []byte(fileContent[0]))
		if err != nil {
			log.Println("Failed to send file content over WebSocket:", err)
			return err
		}
	}
	return nil
}

func (ucm *UserConnectionManager) IsUserOnline(userID string) bool {
	conn := ucm.GetConnection(userID)
	return conn != nil
}

func HandleWebSocketConnections(ucm *UserConnectionManager, w http.ResponseWriter, r *http.Request, db *sql.DB) {
	// Upgrade the HTTP connection to a WebSocket connection
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("Failed to upgrade connection to WebSocket:", err)
		return
	}

	userID := r.URL.Query().Get("userID")
	fmt.Println(userID)
	// Add the WebSocket connection to the user connection manager
	ucm.AddConnection(userID, conn)

	// Remove the WebSocket connection from the user connection manager when the connection is closed
	defer func() {
		ucm.RemoveConnection(userID)
		conn.Close()
	}()

	for {
		// Read incoming messages from the WebSocket connection
		_, message, err := conn.ReadMessage()
		if err != nil {
			log.Println("Failed to read message from connection:", err)
			break
		}

		// Check if the message is valid JSON
		if !json.Valid(message) {
			fmt.Println("Received message is not valid JSON.", message)
			return
		} else {

			// Define a struct to match the structure of the JSON data
			type Bit struct {
				Message      string   `json:"message"`
				RecipientID  string   `json:"recipient_id"`
				SenderID     string   `json:"sender_id"`
				IsGroupChat  bool     `json:"isGroupChat"`
				GroupUserIDs []string `json:"groupUserIDs"`
				Username    string `json:"username"`
			}
			// Parse the JSON string into a Bit struct

			var parsedBit Bit

			erro := json.Unmarshal([]byte(message), &parsedBit)
			if erro != nil {
				fmt.Println("Failed to parse JSON:", erro)
				return
			}
			// Extract individual data
			messageValue := parsedBit.Message
			RecipientID := parsedBit.RecipientID
			SenderID := parsedBit.SenderID
			isGroupChat := parsedBit.IsGroupChat
			groupUserIDs := parsedBit.GroupUserIDs
			username := parsedBit.Username

			sender_id, err := strconv.ParseInt(SenderID, 10, 64)
			if err != nil {
				// Handle error
				fmt.Println("am here")
				fmt.Println(err)
				return
			}

			// save to database

			if isGroupChat {
				// Handle group chat message
				for _, groupUserID := range groupUserIDs {
					// get the recipient id and format it to int
					recipient_id, err := strconv.ParseInt(groupUserID, 10, 64)
					if err != nil {
						fmt.Println("am here index")
						// Handle error
						fmt.Println(err)
						return
					}
					message := models.Message{
						MessageSent:       messageValue,
						DocOrAttachmentID: 0,
						RecipientID:       int(recipient_id),
						SenderID:          int(sender_id),
						CreatedAt:         time.Now().UTC(),
						MessageType:       "text",
					}
					ucm.SendMessage(groupUserID, messageValue, db, message,username)
					log.Printf("Seng message to user ID %s: %s", groupUserID, string(message.MessageSent))
				}
			} else {

				recipient_id, err := strconv.ParseInt(RecipientID, 10, 64)
				if err != nil {
					// Handle error
					fmt.Println(err)
					return
				}
				// define the message structure
				// Insert or append a message to the chat table
				message := models.Message{
					MessageSent:       messageValue,
					DocOrAttachmentID: 0,
					RecipientID:       int(recipient_id),
					SenderID:          int(sender_id),
					CreatedAt:         time.Now().UTC(),
					MessageType:       "text",
				}
				// Handle individual chat message
				ucm.SendMessage(RecipientID, messageValue, db, message,username)
				log.Printf("Received message from user ID %s: %s", SenderID, string(message.MessageSent))
			}

			// Process the received message or perform any required actions
			// ...
		}
	}
}

// func HandleFileUpload0(ucm *UserConnectionManager, w http.ResponseWriter, r *http.Request, db *sql.DB) {
// 	file, fileHeader, err := r.FormFile("file") // Assuming file is uploaded using a form field with name "file"
// 	if err != nil {
// 		http.Error(w, "Failed to retrieve file", http.StatusBadRequest)
// 		return
// 	}
// 	defer file.Close()

// 	fileContent, err := io.ReadAll(file)
// 	if err != nil {
// 		http.Error(w, "Failed to read file content", http.StatusInternalServerError)
// 		return
// 	}

// 	// Save the file to a folder called "fileUploads"
// 	fileName := fileHeader.Filename
// 	filePath := filepath.Join("fileUploads", fileName)
// 	err = os.WriteFile(filePath, fileContent, 0644)
// 	if err != nil {
// 		http.Error(w, "Failed to save file", http.StatusInternalServerError)
// 		return
// 	}

// 	// Generate the file URL
// 	fileURL := fmt.Sprintf("http://localhost:8080/%s", filePath)

// 	// Create a message with the file details
// 	message := models.Message{
// 		MessageSent:       "File uploaded",
// 		DocOrAttachmentID: 0,   // Set the appropriate ID for the document
// 		RecipientID:       789, // Set the recipient ID
// 		SenderID:          456, // Set the sender ID
// 		CreatedAt:         time.Now().UTC(),
// 		MessageType:       "file",
// 		DocumentURL:       fileURL,
// 	}

// 	// Write the file details to the table
// 	fileDetails := models.FileDetails{
// 		FileURL:      fileURL,
// 		FileLocation: filePath,
// 		FileType:     fileHeader.Header.Get("Content-Type"),
// 		CreatedAt:    time.Now().UTC(),
// 		Deleted:      false,
// 	}

// 	// Call the function to save the file details to the table
// 	err = dboperations.WriteToFileTable(fileDetails, db)
// 	if err != nil {
// 		http.Error(w, "Failed to write file details to table", http.StatusInternalServerError)
// 		return
// 	}

// 	// Send the message over WebSocket
// 	ucm.SendMessage(strconv.Itoa(message.RecipientID), message.MessageSent, db, message, fileContent)

// 	// Respond with success message
// 	w.Write([]byte("File uploaded successfully"))
// }

func UploadFile(ucm *UserConnectionManager, w http.ResponseWriter, r *http.Request, db *sql.DB) {
	fmt.Println("File Upload Endpoint Hit")

	// Parse our multipart form, 10 << 20 specifies a maximum
	// upload of 10 MB files.
	r.ParseMultipartForm(10 << 20)
	// FormFile returns the first file for the given key `myFile`
	// it also returns the FileHeader so we can get the Filename,
	// the Header and the size of the file
	file, handler, err := r.FormFile("myFile")
	if err != nil {
		fmt.Println("Error Retrieving the File")
		fmt.Println(err)
		return
	}
	defer file.Close()
	fmt.Printf("Uploaded File: %+v\n", handler.Filename)
	fmt.Printf("File Size: %+v\n", handler.Size)
	fmt.Printf("MIME Header: %+v\n", handler.Header)



    // Create a folder for file uploads if it doesn't exist
    uploadsDir := "./uploads"
    err = os.MkdirAll(uploadsDir, os.ModePerm)
    if err != nil {
        http.Error(w, "Failed to create uploads directory", http.StatusInternalServerError)
        return
    }

    // Save the file to the uploads directory
    fileName := handler.Filename
    filePath := filepath.Join(uploadsDir, fileName)
    newFile, err := os.Create(filePath)
    if err != nil {
        http.Error(w, "Failed to save file", http.StatusInternalServerError)
        return
    }
    defer newFile.Close()

    // Copy the file content to the newly created file
    _, err = io.Copy(newFile, file)
    if err != nil {
        http.Error(w, "Failed to copy file content", http.StatusInternalServerError)
        return
    }

    // Respond with the URL to access the uploaded file
    // fileURL := fmt.Sprintf("http://localhost:8009/uploads/%s", fileName)
    fileURL := fmt.Sprintf("%s/uploads/%s", constants.BaseURL, fileName)
    fmt.Fprintf(w, "File uploaded successfully. You can access it at: %s", fileURL)

	// Write the file details to the table
	fileDetails := models.FileDetails{
		FileURL:      fileURL,
		FileLocation: filePath,
		FileType:     handler.Header.Get("Content-Type"),
		CreatedAt:    time.Now().UTC(),
		Deleted:      false,
	}
	


	// Call the function to save the file details to the table
	fileId,err := dboperations.WriteToFileTable(fileDetails, db)
	if err != nil {
		http.Error(w, "Failed to write file details to table", http.StatusInternalServerError)
		return
	}

	message := models.Message{
		MessageSent:       "File uploaded",
		DocOrAttachmentID: fileId,   // Set the appropriate ID for the document
		RecipientID:       789, // Set the recipient ID
		SenderID:          456, // Set the sender ID
		CreatedAt:         time.Now().UTC(),
		MessageType:       "file",
		DocumentURL:       fileURL,
	}

	// // get file content
	// fileContent, err := io.ReadAll(file)
	// if err != nil {
	// 	http.Error(w, "Failed to read file content", http.StatusInternalServerError)
	// 	return
	// }

	// // Send the message over WebSocket
	ucm.SendMessage(strconv.Itoa(message.RecipientID), message.MessageSent, db, message, fileURL)

	// Respond with success message
	w.Write([]byte("File uploaded successfully"))

}


// request example
// {
// 	"userID": "30",
// 	"message": "Testing"
//   }

// {
// 	"recipient_id": "20",
// 	"message": "checking morning",
//   "sender_id":"34",
//   "isGroupChat":true,
//   "groupUserIDs":["20","44"]
//   }
// when connecing user id must be sent like this
// ws://localhost:8080/ws?userID=20

