-- name: CreatePatient :one
INSERT INTO patients (
  id,  
  username,
  medical_history,
  provider,
  out_of_network_expenses,
  out_of_network_expenses,
  co_pay
) VALUES (
  $1, $2, $3, $4, $5, $6, $7
) RETURNING *;

-- name: GetPatient :one
SELECT * FROM patients
WHERE username = $1 LIMIT 1;

-- name: UpdatePatient :one
UPDATE patients
SET
  medical_history = COALESCE(sqlc.narg(medical_history), medical_history),
  provider = COALESCE(sqlc.narg(provider), provider),
  out_of_network_expenses = COALESCE(sqlc.narg(out_of_network_expenses), out_of_network_expenses),
  out_of_network_expenses = COALESCE(sqlc.narg(out_of_network_expenses), out_of_network_expenses),
  co_pay = COALESCE(sqlc.narg(co_pay), co_pay)
WHERE
  username = sqlc.arg(username)
RETURNING *;