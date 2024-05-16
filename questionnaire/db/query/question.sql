-- name: CreateQuestion :one
INSERT INTO questions (
  code,
  title,  
  input_field,
  options,
  created_by
) VALUES (
  $1, $2, $3, $4, $5
) RETURNING *;

-- name: GetQuestion :one
SELECT * FROM questions
WHERE code = $1 LIMIT 1;

-- name: ListQuestions :many
SELECT * FROM questions
ORDER BY code
LIMIT $1
OFFSET $2;

-- name: UpdateQuestion :one
UPDATE questions
SET
  title = COALESCE(sqlc.narg(title), title),
  input_field = COALESCE(sqlc.narg(input_field), input_field), 
  options = COALESCE(sqlc.narg(options), options) 
WHERE
 created_by = sqlc.arg(created_by)
 AND code = @code
RETURNING *;

-- name: DeleteQuestion :exec
DELETE FROM questions
WHERE code = $1;