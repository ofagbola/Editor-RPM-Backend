// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.18.0
// source: schedules.sql

package db

import (
	"context"
)

const createSchedule = `-- name: CreateSchedule :one
INSERT INTO schedules ( 
  recepient,
  initiator,
  time_slot
) VALUES (
  $1, $2, $3
) RETURNING id, recepient, initiator, time_slot, created_at
`

type CreateScheduleParams struct {
	Recepient string `json:"recepient"`
	Initiator string `json:"initiator"`
	TimeSlot  string `json:"time_slot"`
}

func (q *Queries) CreateSchedule(ctx context.Context, arg CreateScheduleParams) (Schedule, error) {
	row := q.db.QueryRow(ctx, createSchedule, arg.Recepient, arg.Initiator, arg.TimeSlot)
	var i Schedule
	err := row.Scan(
		&i.ID,
		&i.Recepient,
		&i.Initiator,
		&i.TimeSlot,
		&i.CreatedAt,
	)
	return i, err
}

const deleteSchedule = `-- name: DeleteSchedule :exec
DELETE FROM schedules
WHERE id = $1
`

func (q *Queries) DeleteSchedule(ctx context.Context, id int64) error {
	_, err := q.db.Exec(ctx, deleteSchedule, id)
	return err
}

const getSchedule = `-- name: GetSchedule :one
SELECT id, recepient, initiator, time_slot, created_at FROM schedules
WHERE id = $1 LIMIT 1
`

func (q *Queries) GetSchedule(ctx context.Context, id int64) (Schedule, error) {
	row := q.db.QueryRow(ctx, getSchedule, id)
	var i Schedule
	err := row.Scan(
		&i.ID,
		&i.Recepient,
		&i.Initiator,
		&i.TimeSlot,
		&i.CreatedAt,
	)
	return i, err
}

const listSchedules = `-- name: ListSchedules :many
SELECT id, recepient, initiator, time_slot, created_at FROM schedules
ORDER BY id
LIMIT $1
OFFSET $2
`

type ListSchedulesParams struct {
	Limit  int32 `json:"limit"`
	Offset int32 `json:"offset"`
}

func (q *Queries) ListSchedules(ctx context.Context, arg ListSchedulesParams) ([]Schedule, error) {
	rows, err := q.db.Query(ctx, listSchedules, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []Schedule{}
	for rows.Next() {
		var i Schedule
		if err := rows.Scan(
			&i.ID,
			&i.Recepient,
			&i.Initiator,
			&i.TimeSlot,
			&i.CreatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}