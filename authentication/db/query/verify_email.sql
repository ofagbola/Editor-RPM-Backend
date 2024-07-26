-- name: CreateVerifyEmail :one
INSERT INTO verify_emails (
    username,
    email,
    secret_code
) VALUES (
    $1, $2, $3
) RETURNING *;

-- name: GetVerifyEmail :one
SELECT * FROM verify_emails
WHERE username = $1 
  AND expired_at > now()
ORDER BY created_at DESC 
LIMIT 1;


-- name: UpdateVerifyEmail :one
UPDATE verify_emails
SET
    is_used = TRUE
WHERE
    -- id = @id
    username = @username
    AND secret_code = @secret_code
    AND is_used = FALSE
    AND expired_at > now()
RETURNING *; 