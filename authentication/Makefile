DB_URL=postgresql://root:hush@localhost:5432/authentication_service_db?sslmode=disable
postgres:
	docker run --name authentication-service-postgres-container --network authentication-network -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=hush -d postgres:16-alpine
migrateup:
	migrate -path db/migration -database "$(DB_URL)" -verbose up
migratedown:
	migrate -path db/migration -database "$(DB_URL)" -verbose down
new_migration:
	migrate create -ext sql -dir db/migration -seq $(name)	
createdb:
	docker exec -it authentication-service-postgres-container createdb --username=root --owner=root authentication_service_db
dropdb:
	docker exec -it authentication-service-postgres-container dropdb authentication_service_db	
migrateup1:
	migrate -path db/migration -database "$(DB_URL)" -verbose up 1

migratedown1:
	migrate -path db/migration -database "$(DB_URL)" -verbose down 1
db_docs:
	dbdocs build doc/db.dbml
db_schema:
	dbml2sql --postgres -o doc/schema.sql doc/db.dbml
sqlc:
	sqlc generate	
redis:
	docker run --name redis -p 6379:6379 -d redis:7.2-alpine
network: 
	docker network create authentication-network
createContainer:
	docker build -t authentication .
runContainer:
	docker run --name authentication --network authentication-network -p 9098:9098 -p 8089:8089 -e DB_SOURCE="postgresql://root:hush@authentication-service-postgres-container:5432/authentication_service_db?sslmode=disable" authentication:latest
proto:
	rm -f pb/*.go
	rm -f doc/swagger/*.swagger.json
	protoc --proto_path=proto --go_out=pb --go_opt=paths=source_relative \
	--go-grpc_out=pb --go-grpc_opt=paths=source_relative \
	--grpc-gateway_out=pb --grpc-gateway_opt=paths=source_relative \
	--openapiv2_out=doc/swagger --openapiv2_opt=allow_merge=true,merge_file_name=authentication-microservice \
	proto/*.proto
	statik -src=./doc/swagger -dest=./doc

server:
	go run main.go

.PHONY: postgres createdb dropdb migrateup migratedown new_migration sqlc proto server migratedown1 migrateup1 db_docs db_schema redis