-- name: CreateQuestionConfig :one
INSERT INTO question_configs (
  code,
  title,  
  description,
  questions,
  created_by
) VALUES (
  $1, $2, $3, $4, $5
) RETURNING *;

-- name: GetQuestionConfig :one
SELECT * FROM question_configs
WHERE id = $1 LIMIT 1;

-- name: ListQuestionConfigs :many
SELECT * FROM question_configs
ORDER BY id
LIMIT $1
OFFSET $2;

-- name: UpdateQuestionConfig :one
UPDATE question_configs
SET
  title = COALESCE(sqlc.narg(title), title),
  description = COALESCE(sqlc.narg(description), description),
  questions = COALESCE(sqlc.narg(questions), questions)
WHERE
 created_by = sqlc.arg(created_by)
  AND id = @id
RETURNING *;

-- name: DeleteQuestionConfig :exec
DELETE FROM question_configs
WHERE id = $1;