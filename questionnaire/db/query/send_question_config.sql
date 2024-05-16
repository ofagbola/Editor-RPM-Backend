-- name: CreateSendQuestionConfig :one
INSERT INTO send_question_configs (
  question_config_id,  
  recipient,
  sender
) VALUES (
  $1, $2, $3
) RETURNING *;

-- name: GetSendQuestionConfig :one
SELECT * FROM send_question_configs
WHERE id = $1 LIMIT 1;

-- name: ListSendQuestionConfigs :many
SELECT * FROM send_question_configs
ORDER BY id
LIMIT $1
OFFSET $2;

-- name: DeleteSendQuestionConfig :exec
DELETE FROM send_question_configs
WHERE id = $1;