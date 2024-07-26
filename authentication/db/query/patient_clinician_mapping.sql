-- name: CreatePatientClinicianMapping :one
INSERT INTO patient_clinician_mappings (
    id,
    sender,
    recipient_email,
    invite_accepted,
    recipient_username
) VALUES (
    $1, $2, $3, $4, $5
) RETURNING *;


-- name: GetPatientClinicianMapping :one
SELECT * FROM patient_clinician_mappings
WHERE sender = $1 OR recipient_username = $1
LIMIT 1;  -- Adjust the number as needed


-- name: ListPatientClinicianMapping :many
SELECT * FROM patient_clinician_mappings
WHERE sender = $1 OR recipient_username = $1
ORDER BY id
LIMIT $2
OFFSET $3;


-- name: ListAcceptedPatientClinicianMapping :many
SELECT * FROM patient_clinician_mappings
WHERE (sender = $1 OR recipient_username = $1) AND invite_accepted = TRUE
ORDER BY id
LIMIT $2
OFFSET $3;


-- name: UpdatePatientClinicianMapping :one
UPDATE patient_clinician_mappings
SET
    accepted_date = COALESCE(sqlc.narg(accepted_date), accepted_date),
    invite_accepted = COALESCE(sqlc.narg(invite_accepted), invite_accepted),
    recipient_username = COALESCE(sqlc.narg(recipient_username), recipient_username)
WHERE
  id = sqlc.arg(id)
--   sender = sqlc.arg(sender) -- OR recipient email
RETURNING *; 