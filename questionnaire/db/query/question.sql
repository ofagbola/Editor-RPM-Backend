-- name: CreateQuestion :one
INSERT INTO questions (
  title,  
  input_field,
  options,
  created_by
) VALUES (
  $1, $2, $3, $4
) RETURNING *;

-- name: GetQuestion :one
SELECT * FROM questions
WHERE id = $1 LIMIT 1;

-- name: ListQuestions :many
SELECT * FROM questions
ORDER BY id
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
 AND id = @id
RETURNING *;

-- name: DeleteQuestion :exec
DELETE FROM questions
WHERE id = $1;