package dboperations

import (
	"database/sql"
	"encoding/json"
	"fmt"
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
func InsertOrUpdateMessage(db *sql.DB, message models.Message) error {
	// Check if a record with the same created_at exists for the user
	query := `
		SELECT message_array
		FROM messages
		WHERE user_id = $1 AND created_at::date = $2::date
	`

	date := message.CreatedAt.Format("2006-01-02")
	rows, err := db.Query(query, message.SenderID, date)
	if err != nil {
		return err
	}
	defer rows.Close()

	var messageArray []models.Message
	for rows.Next() {
		err := rows.Scan(&messageArray)
		if err != nil {
			return err
		}
	}

	if len(messageArray) > 0 {
		// Append the new message to the existing message_array
		messageArray = append(messageArray, message)
	} else {
		// Create a new record for the message
		messageArray = []models.Message{message}
	}

	// Upsert the message_array into the chat table
	query = `
		INSERT INTO messages (user_id, recipient_id, message_array, created_at, updated_at)
		VALUES ($1, $2, $3, $4, $5)
		ON CONFLICT (user_id, created_at::date) DO UPDATE
		SET message_array = $3, updated_at = $5
	`

	messageArrayJSON, err := json.Marshal(messageArray)
	if err != nil {
		return err
	}

	_, err = db.Exec(query, message.SenderID, message.RecipientID, messageArrayJSON, message.CreatedAt, message.CreatedAt)
	return err
}

func FetchMessages(db *sql.DB, userID int) ([]models.Message, error) {
	query := `
		SELECT message_array
		FROM messages
		WHERE user_id = $1
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

func WriteToFileTable(fileDetails models.FileDetails, db *sql.DB) error{
	query := `
		INSERT INTO file_table (file_url, file_location, file_type, created_at, deleted, deleted_at)
		VALUES ($1, $2, $3, $4, $5, $6)
		RETURNING id`

	var fileID int
	err := db.QueryRow(query, fileDetails.FileURL, fileDetails.FileLocation, fileDetails.FileType, fileDetails.CreatedAt, fileDetails.Deleted, fileDetails.DeletedAt).Scan(&fileID)
	if err != nil {
		return err
	}

	fileDetails.ID = fileID
	return nil
}