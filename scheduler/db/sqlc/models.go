// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.18.0

package db

import (
	"time"
)

type Schedule struct {
	ID        int64     `json:"id"`
	Recepient string    `json:"recepient"`
	Initiator string    `json:"initiator"`
	TimeSlot  string    `json:"time_slot"`
	CreatedAt time.Time `json:"created_at"`
}
