-- name: CreateSchedule :one
INSERT INTO schedules ( 
  recipient,
  initiator,
  time_slot
) VALUES (
  $1, $2, $3
) RETURNING *;

-- name: GetSchedule :one
SELECT * FROM schedules
WHERE id = $1 LIMIT 1;

-- name: ListSchedules :many
SELECT * FROM schedules
ORDER BY id
LIMIT $1
OFFSET $2;

-- name: DeleteSchedule :exec
DELETE FROM schedules
WHERE id = $1;