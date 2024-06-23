-- name: CreateVerifyForgotPassword :one
INSERT INTO verify_forgot_passwords (
    username,
    email,
    secret_code
) VALUES (
    $1, $2, $3
) RETURNING *;

-- name: GetVerifyForgotPassword :one
SELECT * FROM verify_forgot_passwords
WHERE username = $1 
  AND expired_at > now()
ORDER BY created_at DESC 
LIMIT 1;


-- name: UpdateVerifyForgotPassword :one
UPDATE verify_forgot_passwords
SET
    is_used = TRUE
WHERE
    id = @id
    AND secret_code = @secret_code
    AND is_used = FALSE
    AND expired_at > now()
RETURNING *; 