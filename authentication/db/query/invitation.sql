-- -- name: CreateInvitation :one
-- INSERT INTO invitations (
--     id,
--     sender,
--     recepient_email,
--     is_accepted,
--     created_at
-- ) VALUES (
--     $1, $2, $3
-- ) RETURNING *;

-- -- name: GetInvitation :one
-- SELECT * FROM invitations
-- WHERE username = $1 
--   AND expired_at > now()
-- ORDER BY created_at DESC 
-- LIMIT 1;


-- -- name: UpdateInvitation :one
-- UPDATE invitations
-- SET
--     is_used = TRUE
-- WHERE
--     -- id = @id
--     username = @username
--     AND secret_code = @secret_code
--     AND is_accepted = FALSE
--     AND expired_at > now()
-- RETURNING *; 