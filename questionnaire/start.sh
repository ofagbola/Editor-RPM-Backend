#!/bin/sh

set -e

echo "run db migration"
# /app/migrate -path /app/db/migration -database "postgresql://root:hush@questionnaire_db:5432/questionnaire_service_db?sslmode=disable" -verbose up
/app/migrate -path /app/db/migration -database "$DB_SOURCE" -verbose up

echo "start the app"
exec "$@"  