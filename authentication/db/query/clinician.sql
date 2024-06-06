-- name: CreateClinician :one
INSERT INTO clinicians (
  id,  
  username,
  credentials,
  specialities,
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
  specialities = COALESCE(sqlc.narg(specialities), specialities),
  clinic_name = COALESCE(sqlc.narg(clinic_name), clinic_name),
  clinic_id = COALESCE(sqlc.narg(clinic_id), clinic_id),
  accept_patient = COALESCE(sqlc.narg(accept_patient), accept_patient),
  image = COALESCE(sqlc.narg(image), image)
WHERE
  username = sqlc.arg(username)
RETURNING *; 