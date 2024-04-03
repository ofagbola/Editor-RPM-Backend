DB_URL=postgresql://root:hush@localhost:5432/questionnaire_service_db?sslmode=disable
postgres:
	docker run --name questionnaire-service-postgres-container -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=hush -d postgres:16-alpine
migrateup:
	migrate -path db/migration -database "$(DB_URL)" -verbose up
migratedown:
	migrate -path db/migration -database "$(DB_URL)" -verbose down
new_migration:
	migrate create -ext sql -dir db/migration -seq $(name)	
createdb:
	docker exec -it questionnaire-service-postgres-container createdb --username=root --owner=root questionnaire_service_db
dropdb:
	docker exec -it questionnaire-service-postgres-container dropdb questionnaire_service_db	
sqlc:
	sqlc generate	
proto:
	rm -f pb/*.go
	rm -f doc/swagger/*.swagger.json
	protoc --proto_path=proto --go_out=pb --go_opt=paths=source_relative \
	--go-grpc_out=pb --go-grpc_opt=paths=source_relative \
	--grpc-gateway_out=pb --grpc-gateway_opt=paths=source_relative \
	--openapiv2_out=doc/swagger --openapiv2_opt=allow_merge=true,merge_file_name=questionnaire-microservice \
	proto/*.proto
	statik -src=./doc/swagger -dest=./doc

server:
	go run main.go

.PHONY: postgres createdb dropdb migrateup migratedown new_migration sqlc proto server