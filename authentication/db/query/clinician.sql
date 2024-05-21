-- name: CreateClinician :one
INSERT INTO clinicians (
  id,  
  username,
  credentials,
  specialties,
  clinic_name,
  clinic_id,
  image,
  accept_patient
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8
) RETURNING *;

-- name: GetClinician :one
SELECT * FROM clinicians
WHERE username = $1 LIMIT 1;

-- name: UpdateClinician :one
UPDATE clinicians
SET
  credentials = COALESCE(sqlc.narg(credentials), credentials),
  specialties = COALESCE(sqlc.narg(specialties), specialties),
  clinic_name = COALESCE(sqlc.narg(clinic_name), clinic_name),
  clinic_id = COALESCE(sqlc.narg(clinic_id), clinic_id)
WHERE
  username = sqlc.arg(username)
RETURNING *;