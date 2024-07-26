-- name: CreateVerifyInvitation :one
INSERT INTO verify_invitations (
    id,
    sender,
    recipient_username,
    recipient_email,
    secret_code,
    is_used,
    created_at
) VALUES (
    $1, $2, $3, $4, $5, $6, $7
) RETURNING *;



-- name: GetVerifyInvitation :one
SELECT * FROM verify_invitations
WHERE id = $1 
  AND expired_at > now()
ORDER BY created_at DESC 
LIMIT 1;


-- name: UpdateVerifyInvitation :one
UPDATE verify_invitations
SET
    is_used = TRUE,
    recipient_username = COALESCE(sqlc.narg(recipient_username), recipient_username)
WHERE
    id = @id
    AND sender = @sender
    AND recipient_email = @recipient_email
    AND secret_code = @secret_code
    AND is_used = FALSE
    AND expired_at > now()
RETURNING *; 