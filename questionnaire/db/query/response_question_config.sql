-- name: CreateResponseQuestionConfig :one
INSERT INTO response_question_configs (
  question_config_id,  
  response,
  patient
) VALUES (
  $1, $2, $3
) RETURNING *;

-- name: GetResponseQuestionConfig :one
SELECT * FROM response_question_configs
WHERE id = $1 LIMIT 1;

-- name: ListResponseQuestionConfigs :many
SELECT * FROM response_question_configs
ORDER BY id
LIMIT $1
OFFSET $2;

-- name: DeleteResponseQuestionConfig :exec
DELETE FROM response_question_configs
WHERE id = $1;