package services

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"sync"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
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

func (ucm *UserConnectionManager) SendMessage(userID string, message string) error {
	conn := ucm.GetConnection(userID)
	// save to database
	// dboperations.ConnectToDatabase(constants.)
	// connectionString := dboperations.

	if conn == nil {
		fmt.Printf("no connection found for user ID: %s", userID)
		return nil
	} else {
		err := conn.WriteMessage(websocket.TextMessage, []byte(message))
		if err != nil {
			fmt.Printf("failed to send message to user ID %s: %s", userID, err.Error())
		}
	}

	return nil
}

func (ucm *UserConnectionManager) IsUserOnline(userID string) bool {
	conn := ucm.GetConnection(userID)
	return conn != nil
}

func HandleWebSocketConnections(ucm *UserConnectionManager, w http.ResponseWriter, r *http.Request) {
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
			fmt.Println("Received message is not valid JSON.")
			return
		} else {

			// Define a struct to match the structure of the JSON data
			type Bit struct {
				Message      string   `json:"message"`
				UserID       string   `json:"userID"`
				IsGroupChat  bool     `json:"isGroupChat"`
				GroupUserIDs []string `json:"groupUserIDs"`
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
			userID := parsedBit.UserID
			isGroupChat := parsedBit.IsGroupChat
			groupUserIDs := parsedBit.GroupUserIDs

			// save to database

			if isGroupChat {
				// Handle group chat message
				for _, groupUserID := range groupUserIDs {
					ucm.SendMessage(groupUserID, messageValue)
				}
			} else {
				// Handle individual chat message
				ucm.SendMessage(userID, messageValue)
			}

			log.Printf("Received message from user ID %s: %s", userID, string(message))

			// Process the received message or perform any required actions
			// ...
		}
	}
}

// request example
// {
// 	"userID": "30",
// 	"message": "Testing"
//   }
