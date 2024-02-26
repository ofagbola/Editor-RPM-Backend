package dboperations

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"time"
	"websocket-chat/models"

	_ "github.com/lib/pq"
)

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

	return db, nil
}

// the message is saved based on created_at
func SaveMessageToDb(db *sql.DB, message models.Message) error {
	// Get the current date
	currentDate := time.Now().Truncate(24 * time.Hour)
	  // Convert message struct to JSON
	  messageJSON, errr := json.Marshal(message)
	  if errr != nil {
		  log.Fatal(errr)
	  }
  

	// Check if a record exists for the given user_id_1 and user_id_2
	var createdAt time.Time
	var messageArray []byte
	err := db.QueryRow("SELECT created_at, message_array FROM chat WHERE (user_id_1 = $1 AND user_id_2 = $2) OR (user_id_1 = $2 AND user_id_2 = $1)", message.SenderID, message.RecipientID).Scan(&createdAt, &messageArray)
	switch {
	case err == sql.ErrNoRows:
		// Create a new record if no record found
		_, err := db.Exec("INSERT INTO chat (user_id_1, user_id_2, message_array, created_at, updated_at) VALUES ($1, $2, $3, $4, $5)",
			message.SenderID, message.RecipientID, messageJSON /* initial empty JSON array */, currentDate, currentDate)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println("New record created.")
	case err != nil:
		log.Fatal(err)
	default:
		if createdAt.Truncate(24 * time.Hour).Equal(currentDate) {

			// Unmarshal the existing message_array into a slice of Message structs
			var existingMessages []models.Message
			if unmarshal_err := json.Unmarshal(messageArray, &existingMessages); err != nil {
				log.Fatal(unmarshal_err)
			}
			
			// Append the new message to the existing messages
			existingMessages = append(existingMessages, message)
			
			// Marshal the updated messages back to JSON
			updatedMessageArray, errr := json.Marshal(existingMessages)
			if errr != nil {
				log.Fatal(errr)
			}
				
			// Update the existing record by appending the current message
			_, err := db.Exec("UPDATE chat SET message_array = message_array || $1, updated_at = $2 WHERE user_id_1 = $3 AND user_id_2 = $4",
			updatedMessageArray, time.Now(), message.SenderID, message.RecipientID)
			if err != nil {
				log.Fatal(err)
			}
			fmt.Println("Message appended to existing record.")
		} else {
			// Create a new record if the existing record is not for the current date
			_, err := db.Exec("INSERT INTO chat (user_id_1, user_id_2, message_array, created_at, updated_at) VALUES ($1, $2, $3, $4, $5)",
				message.SenderID, message.RecipientID, messageJSON /* initial empty JSON array */, currentDate, currentDate)
			if err != nil {
				log.Fatal(err)
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

func WriteToFileTable(fileDetails models.FileDetails, db *sql.DB) (fileId int,fileUploadError error) {
	query := `
		INSERT INTO file (file_url, file_location, file_type, created_at, deleted, deleted_at)
		VALUES ($1, $2, $3, $4, $5, $6)
		RETURNING id`

	var fileID int
	err := db.QueryRow(query, fileDetails.FileURL, fileDetails.FileLocation, fileDetails.FileType, fileDetails.CreatedAt, fileDetails.Deleted, fileDetails.DeletedAt).Scan(&fileID)
	if err != nil {
		return 0,err
	}

	fileDetails.ID = fileID
	return fileID,err
}
