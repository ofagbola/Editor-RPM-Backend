-- name: CreateInvitation :one
INSERT INTO invitations (
    id,
    sender,
    recepient_username,
    recepient_email,
    secret_code,
    created_at
) VALUES (
    $1, $2, $3, $4, $5, $6
) RETURNING *;

-- name: GetInvitation :one
SELECT * FROM invitations
WHERE sender = $1 
  AND expired_at > now()
ORDER BY created_at DESC 
LIMIT 1;


-- name: UpdateInvitation :one
UPDATE invitations
SET
    is_accepted = TRUE
WHERE
    -- id = @id
    sender = @sender
    AND secret_code = @secret_code
    AND is_accepted = FALSE
    AND expired_at > now()
RETURNING *; 