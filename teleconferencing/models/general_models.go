package models

import (
	"sync"
	"time"

	"github.com/gorilla/websocket"
)



type MyUserConnectionManager struct {
	connections map[string]*websocket.Conn
	mutex       sync.Mutex
}

type ChatMessage struct {
    CallDuration         int    `json:"call_duration"`
    CreatedAt            string `json:"created_at"`
    DocOrAttachmentID    int    `json:"doc_or_attachment_id"`
    DocumentURL          string `json:"document_url"`
    IDOfSender           int    `json:"id_of_sender"`
    MessageSent          string `json:"message_sent"`
    MessageType          string `json:"message_type"`
    MissedCall           bool   `json:"missed_call"`
    MissedVideoCall      bool   `json:"missed_video_call"`
    ReadAt               string `json:"read_at"`
    RecipientID          int    `json:"recipient_id"`
    VideoDuration        int    `json:"video_duration"`
    VoiceRecordID        int    `json:"voice_record_id"`
}


type Message struct {
	MessageSent      string    `json:"message_sent"`
	DocOrAttachmentID int       `json:"doc_or_attachment_id"`
	DocumentURL       string	 `json:"document_url"`
	VoiceRecordID    int       `json:"voice_record_id"`
	MissedCall       bool      `json:"missed_call"`
	MissedVideoCall  bool      `json:"missed_video_call"`
	CallDuration     int       `json:"call_duration"`
	VideoDuration    int       `json:"video_duration"`
	SenderID         int       `json:"id_of_sender"`
	RecipientID         int       `json:"recipient_id"`
	ReadAt           time.Time  `json:"read_at"`
	CreatedAt        time.Time `json:"created_at"`
	MessageType      string    `json:"message_type"`
}



type FileDetails struct {
	ID          int
	FileURL     string
	FileLocation string
	FileType    string
	CreatedAt   time.Time
	Deleted     bool
	DeletedAt   time.Time
}

type FileUploadResponse struct {
	FileID     int    `json:"file_id"`
	SuccessMsg string `json:"success_message"`
	FileURL    string `json:"file_url"`
}

// User represents the users table in the database
// User represents a user in the database
type User struct {
    ID            uint      `gorm:"primaryKey"`
    Email         string    `gorm:"not null"`
    FirstName     string    `gorm:"not null"`
    LastName      string    `gorm:"not null"`
    Location      string    `gorm:"not null"`
    Credentials   string `gorm:"type:text[]"`
    Ethnicity     string    `gorm:"not null"`
    Gender        string    `gorm:"not null"`
    Language      string    `gorm:"not null"`
    Specialties   string  `gorm:"type:text[]"`
    Image         string    `gorm:"not null"`
    ClinicName    string    `gorm:"not null"`
    ClinicID      string    `gorm:"not null"`
    AcceptPatient bool      `gorm:"not null"`
    PhoneNumber   string    `gorm:"not null"`
    CreatedAt     time.Time `gorm:"autoCreateTime"`
    UpdatedAt     time.Time `gorm:"autoUpdateTime"`
}

type Chat struct {
    ID          uint       `gorm:"primary_key"`
    UserID1     int        `gorm:"column:user_id_1"`
    UserID2     int        `gorm:"column:user_id_2"`
    MessageArray []byte    `gorm:"column:message_array"`
    CreatedAt   time.Time  `gorm:"column:created_at"`
    UpdatedAt   time.Time  `gorm:"column:updated_at"`
}