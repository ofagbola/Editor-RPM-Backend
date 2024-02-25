package models

import (

	"time"
	"sync"
	"github.com/gorilla/websocket"
)



type MyUserConnectionManager struct {
	connections map[string]*websocket.Conn
	mutex       sync.Mutex
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
	ReadAt           time.Time  `json:"read_at,omitempty"`
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
