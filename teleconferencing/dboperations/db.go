package dboperations

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"strconv"

	// "strconv"

	// "strconv"
	"time"
	"websocket-chat/constants"
	"websocket-chat/models"

	_ "github.com/lib/pq"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var (
	DBConnection   *sql.DB
	GormConnection *gorm.DB
)

func ConnectGormDB() (*gorm.DB, error) {
	// Open a connection to the database
	db, err := gorm.Open(postgres.Open(constants.PostgresConnectionString), &gorm.Config{})
	if err != nil {
		return nil, err
	}
	GormConnection = db
	fmt.Println("Gorm database connected")
	return db, nil
}

func ConnectToDatabase(connStr string) (*sql.DB, error) {
	fmt.Println("Connecting to PostgreSQL!")
	// Connect to the database
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}

	// Ping the database to verify the connection
	err = db.Ping()
	if err != nil {
		db.Close()
		fmt.Println(err)
		return nil, err
	}

	fmt.Println("Connected to PostgreSQL!")
	DBConnection = db
	ConnectGormDB()
	return db, nil
}

// the message is saved based on created_at
func SaveMessageToDb(db *sql.DB, message models.Message) error {
	// Get the current date
	currentDate := time.Now().Truncate(24 * time.Hour)
	// Convert message struct to JSON
	// messageJSON, errr := json.Marshal(message)
	// if errr != nil {
	// 	fmt.Println(errr)
	// }

	// Check if a record exists for the given user_id_1 and user_id_2
	var createdAt time.Time
	var messageArray []byte
	err := db.QueryRow("SELECT created_at, message_array FROM chat WHERE (user_id_1 = $1 AND user_id_2 = $2) OR (user_id_1 = $2 AND user_id_2 = $1)  ORDER BY created_at DESC", message.SenderID, message.RecipientID).Scan(&createdAt, &messageArray)
	switch {
	case err == sql.ErrNoRows:
		// Unmarshal the existing message_array into a slice of Message structs
		var existingMessages []models.Message

		// Append the new message to the existing messages
		existingMessages = append(existingMessages, message)
		fmt.Println(existingMessages)

		// Marshal the updated messages back to JSON
		updatedMessageArray, errr := json.Marshal(existingMessages)
		if errr != nil {
			fmt.Println(errr)
		}

		// Create a new record if no record found
		_, err := db.Exec("INSERT INTO chat (user_id_1, user_id_2, message_array, created_at, updated_at) VALUES ($1, $2, $3, $4, $5)",
			message.SenderID, message.RecipientID, updatedMessageArray /* initial empty JSON array */, time.Now(), time.Now())
		if err != nil {
			fmt.Println(err)
		}
		fmt.Println("New record created.")
	case err != nil:
		fmt.Println(err)
	default:
		fmt.Println(currentDate)
		fmt.Println(createdAt.Truncate(24 * time.Hour))
		createdAtDate := createdAt.Truncate(24 * time.Hour)
		currentDateDate := currentDate.Truncate(24 * time.Hour)
		equal := createdAtDate.Year() == currentDateDate.Year() &&
			createdAtDate.Month() == currentDateDate.Month() &&
			createdAtDate.Day() == currentDateDate.Day()
		fmt.Println(equal)

		if equal {

			// Unmarshal the existing message_array into a slice of Message structs
			var existingMessages []models.Message
			if unmarshal_err := json.Unmarshal(messageArray, &existingMessages); err != nil {
				fmt.Println("unmarshal error: ",unmarshal_err)
			}

			// Append the new message to the existing messages
			existingMessages = append(existingMessages, message)

			// Marshal the updated messages back to JSON
			updatedMessageArray, errr := json.Marshal(existingMessages)
			if errr != nil {
				fmt.Println(errr)
			}

			// Update the existing record by appending the current message
			_, err := db.Exec("UPDATE chat SET message_array = $1, updated_at = $2 WHERE user_id_1 = $3 AND user_id_2 = $4",
				updatedMessageArray, time.Now(), message.SenderID, message.RecipientID)
			if err != nil {
				fmt.Println(err)
			}

			fmt.Println("Message appended to existing record.")
		} else {

			var existingMessages []models.Message

		// Append the new message to the existing messages
		  existingMessages = append(existingMessages, message)

			// Create a new record if the existing record is not for the current date
			_, err := db.Exec("INSERT INTO chat (user_id_1, user_id_2, message_array, created_at, updated_at) VALUES ($1, $2, $3, $4, $5)",
				message.SenderID, message.RecipientID, existingMessages /* initial empty JSON array */, time.Now(), time.Now())
			if err != nil {
				fmt.Println(err)
			}
			fmt.Println("New record created.")
		}
	}
	return err
}

func FetchMessages(db *sql.DB, userID int) ([]models.Message, error) {
	query := `
		SELECT message_array
		FROM chat
		WHERE user_id_1 = $1 OR user_id_2 = $1
	`

	rows, err := db.Query(query, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var messages []models.Message

	for rows.Next() {
		var messageArray []models.Message
		err := rows.Scan(&messageArray)
		if err != nil {
			return nil, err
		}
		messages = append(messages, messageArray...)
	}

	return messages, nil
}

func FetchChatsList(user_id string) ([]*models.ChatMessage, error) {
	// Query the table to select the most recent row
	// Specify the user ID for filtering

	// Query the table to select the most recent row where user_id_1 or user_id_2 is equal to the specified user ID
	query := `
	SELECT message_array 
		FROM (
			SELECT *,
				ROW_NUMBER() OVER (PARTITION BY LEAST(user_id_1, user_id_2), GREATEST(user_id_1, user_id_2) ORDER BY created_at DESC) AS rn
			FROM chat
			WHERE user_id_1 = $1 OR user_id_2 = $1
		) AS subquery
	WHERE rn = 1 ORDER BY updated_at DESC;			
	`
	var msgArrray []*models.ChatMessage
	rows, err := DBConnection.Query(query, user_id)
	if err != nil {
		fmt.Println(err)
	}
	defer rows.Close()

	// Declare variables to hold JSON data
	var messages string
	// Declare a variable to hold the unmarshaled JSON data
	// var jsonData []map[string]interface{}

	// Iterate over the rows
	for rows.Next() {
	
		var chatMsg models.ChatMessage
		// Scan the message_array data into the messages variable
		if err := rows.Scan(&messages); err != nil {
			fmt.Println("message error:",err)
		}

		// // Unmarshal the JSON data into the jsonData variabl

		// Unmarshal JSON data into a map
		var rowMap []map[string]interface{}
		if err := json.Unmarshal([]byte(messages), &rowMap); err != nil {
			fmt.Println("unmarshal 1",err)
		}

		// Append the decoded map to the slice
		// jsonData = append(jsonData, rowMap)
		fmt.Println(rowMap)
		// 	fmt.Println("Key-Value Pair Array:", data)
	
		lastInnerArray := rowMap[len(rowMap)-1]
		// Map the fields from the map to the ChatMessage struct
		for key, value := range lastInnerArray {
			switch key {
			case "call_duration":
				chatMsg.CallDuration = int(value.(float64))
			case "created_at":
				chatMsg.CreatedAt = value.(string)
			case "doc_or_attachment_id":
				chatMsg.DocOrAttachmentID = int(value.(float64))
			case "document_url":
				chatMsg.DocumentURL = value.(string)
			case "id_of_sender":
				chatMsg.IDOfSender = int(value.(float64))
			case "message_sent":
				chatMsg.MessageSent = value.(string)
			case "message_type":
				chatMsg.MessageType = value.(string)
			case "missed_call":
				chatMsg.MissedCall = value.(bool)
			case "missed_video_call":
				chatMsg.MissedVideoCall = value.(bool)
			case "read_at":
				chatMsg.ReadAt = value.(string)
			case "recipient_id":
				chatMsg.RecipientID = int(value.(float64))
			case "video_duration":
				chatMsg.VideoDuration = int(value.(float64))
			case "voice_record_id":
				chatMsg.VoiceRecordID = int(value.(float64))
			}
		}
		// Print the length of the messageArray
		fmt.Println("Length of messageArray:\n", chatMsg)
		msgArrray = append(msgArrray, &chatMsg)
	}
	// Check the type of jsonData
	// switch data := jsonData.(type) {
	// case map[string]interface{}:
	// It's a 1D array
	// fmt.Println("1D Array:", data)
	// var lastInnerArray map[string]interface{}
	// err := json.Unmarshal(messages, &lastInnerArray)
	// if err != nil {
	// 	fmt.Println("Error unmarshaling JSON 2:", err)
	// 	return nil, err
	// }
	// // Map the fields from the map to the ChatMessage struct
	// for key, value := range lastInnerArray {
	// 	switch key {
	// 	case "call_duration":
	// 		chatMsg.CallDuration = int(value.(float64))
	// 	case "created_at":
	// 		chatMsg.CreatedAt = value.(string)
	// 	case "doc_or_attachment_id":
	// 		chatMsg.DocOrAttachmentID = int(value.(float64))
	// 	case "document_url":
	// 		chatMsg.DocumentURL = value.(string)
	// 	case "id_of_sender":
	// 		chatMsg.IDOfSender = int(value.(float64))
	// 	case "message_sent":
	// 		chatMsg.MessageSent = value.(string)
	// 	case "message_type":
	// 		chatMsg.MessageType = value.(string)
	// 	case "missed_call":
	// 		chatMsg.MissedCall = value.(bool)
	// 	case "missed_video_call":
	// 		chatMsg.MissedVideoCall = value.(bool)
	// 	case "read_at":
	// 		chatMsg.ReadAt = value.(string)
	// 	case "recipient_id":
	// 		chatMsg.RecipientID = int(value.(float64))
	// 	case "video_duration":
	// 		chatMsg.VideoDuration = int(value.(float64))
	// 	case "voice_record_id":
	// 		chatMsg.VoiceRecordID = int(value.(float64))
	// 	}
	// }
	// // Print the length of the messageArray
	// fmt.Println("Length of messageArray:\n", chatMsg)
	// msgArrray = append(msgArrray, &chatMsg)

	// case []interface{}:
	// 	// It's a key-value pair array
	// 	fmt.Println("Key-Value Pair Array:", data)
	// 	// Unmarshal the JSON data into messageArray
	// 	err := json.Unmarshal(messages, &messageArray)
	// 	if err != nil {
	// 		fmt.Println("Error unmarshaling JSON:", err)
	// 		return nil, err
	// 	}
	// 	lastInnerArray := messageArray[len(messageArray)-1]
	// 	// Map the fields from the map to the ChatMessage struct
	// 	for key, value := range lastInnerArray {
	// 		switch key {
	// 		case "call_duration":
	// 			chatMsg.CallDuration = int(value.(float64))
	// 		case "created_at":
	// 			chatMsg.CreatedAt = value.(string)
	// 		case "doc_or_attachment_id":
	// 			chatMsg.DocOrAttachmentID = int(value.(float64))
	// 		case "document_url":
	// 			chatMsg.DocumentURL = value.(string)
	// 		case "id_of_sender":
	// 			chatMsg.IDOfSender = int(value.(float64))
	// 		case "message_sent":
	// 			chatMsg.MessageSent = value.(string)
	// 		case "message_type":
	// 			chatMsg.MessageType = value.(string)
	// 		case "missed_call":
	// 			chatMsg.MissedCall = value.(bool)
	// 		case "missed_video_call":
	// 			chatMsg.MissedVideoCall = value.(bool)
	// 		case "read_at":
	// 			chatMsg.ReadAt = value.(string)
	// 		case "recipient_id":
	// 			chatMsg.RecipientID = int(value.(float64))
	// 		case "video_duration":
	// 			chatMsg.VideoDuration = int(value.(float64))
	// 		case "voice_record_id":
	// 			chatMsg.VoiceRecordID = int(value.(float64))
	// 		}
	// 	}
	// 	// Print the length of the messageArray
	// 	fmt.Println("Length of messageArray:\n", chatMsg)
	// 	msgArrray = append(msgArrray, &chatMsg)
	// default:
	// 	// Unexpected data type
	// 	fmt.Println("Unexpected data type:", data)
	// }

	// }
	return msgArrray, nil
}

// FetchUser fetches a user from the database by user_id
func FetchUser(user_id int) (models.User, error) {
	// Check if the database connection is nil
	if GormConnection == nil {
		return models.User{}, errors.New("database connection is nil")
	}
	// Specify the model that GORM should use for the query
	db := GormConnection.Model(&models.User{})

	// Prepare the query
	var user models.User

	// Fetch the user with user_id from the users table
	result := db.Where("id = ?", user_id).First(&user)

	// Check for errors
	if result.Error != nil {
		fmt.Println("fetch user error:", result.Error)
		return user, result.Error
	}

	return user, nil
}

// Function to fetch chat records with pagination
func GetChatRecords(userId, recipientId string, page, pageSize int) ([]models.ChatMessage, string, string, error) {
	var chatMessages []models.ChatMessage

	// Paginate the query
	// offset := (page - 1) * pageSize

	// Execute the SQL query
	query := `
		SELECT message_array
		FROM chat
		WHERE (user_id_1 = $1 AND user_id_2 = $2) OR (user_id_1 = $2 AND user_id_2 = $1)
		ORDER BY created_at ASC

	`
	// query := `
	// SELECT message_array
	// FROM chat
	// WHERE (user_id_1 = 20 AND user_id_2 = 44)
	// `
	// OFFSET $3
	// LIMIT $4
	rows, err := DBConnection.Query(query, userId, recipientId)
	//  rows, err := DBConnection.Query(query)
	fmt.Print(query)
	// offset, pageSize
	if err != nil {
		// Handle error
		return nil, "", "", err
	}
	defer rows.Close()

	// Iterate through the rows and parse chat.MessageArray to ChatMessage struct
	for rows.Next() {
		var messageArray []byte
		if err := rows.Scan(&messageArray); err != nil {
			// Handle error
			continue
		}

		var column1Value string
		err := rows.Scan(&column1Value)
		if err != nil {
			// Handle the error
			fmt.Println(err)
		}

		// Print the values
		fmt.Printf("Column1: %s, Column2: %s\n", strconv.Itoa(len(column1Value)), strconv.Itoa(len(messageArray)))
		var chatMessage []models.ChatMessage
		// Parse chat.MessageArray to ChatMessage struct
		if err := json.Unmarshal(messageArray, &chatMessage); err != nil {
			// Handle error
			fmt.Println(err)
			continue
		}
		// Append chatMessage to chatMessages slice
		chatMessages = append(chatMessages, chatMessage...)
	}

	// Calculate next and previous page URLs
	// var nextURL, prevURL string
	// if len(chatMessages) == pageSize {
	// 	nextPage := page + 1
	// 	nextURL = "/chats?page=" + strconv.Itoa(nextPage)
	// }
	// if page > 1 {
	// 	prevPage := page - 1
	// 	prevURL = "/chats?page=" + strconv.Itoa(prevPage)
	// }
	fmt.Println(chatMessages)
	return chatMessages, "nextURL", "prevURL", nil
}

func WriteToFileTable(fileDetails models.FileDetails, db *sql.DB) (fileId int, fileUploadError error) {
	query := `
		INSERT INTO file (file_url, file_location, file_type, created_at, deleted, deleted_at)
		VALUES ($1, $2, $3, $4, $5, $6)
		RETURNING id`

	var fileID int
	err := db.QueryRow(query, fileDetails.FileURL, fileDetails.FileLocation, fileDetails.FileType, fileDetails.CreatedAt, fileDetails.Deleted, fileDetails.DeletedAt).Scan(&fileID)
	if err != nil {
		return 0, err
	}

	fileDetails.ID = fileID
	return fileID, err
}
