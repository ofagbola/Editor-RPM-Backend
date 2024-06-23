-- name: CreateUser :one
INSERT INTO users (
  email,  
  username,
  first_name,
  last_name,
  dob,
  gender,
  location,
  languages,
  ethnicity,
  role,
  phone_number,
  hashed_password,
  is_email_verified
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13
) RETURNING *;

-- name: GetUser :one
SELECT * FROM users
WHERE username = $1 OR email = $1 LIMIT 1;

-- name: UpdateUser :one
UPDATE users
SET
  hashed_password = COALESCE(sqlc.narg(hashed_password), hashed_password),
  password_changed_at = COALESCE(sqlc.narg(password_changed_at), password_changed_at),
  first_name = COALESCE(sqlc.narg(first_name), first_name),
  last_name = COALESCE(sqlc.narg(last_name), last_name),
  phone_number = COALESCE(sqlc.narg(phone_number), phone_number),
  languages = COALESCE(sqlc.narg(languages), languages),
  location = COALESCE(sqlc.narg(location), location),
  email = COALESCE(sqlc.narg(email), email),
  is_email_verified = COALESCE(sqlc.narg(is_email_verified), is_email_verified)
WHERE
  username = sqlc.arg(username)
RETURNING *;