
DB_URL=postgres://go_user:gofindP123@__@localhost:5432/go_db?sslmode=disable

network:
	docker network create erpm-network	


postgres:
	docker run --name postgres --network erpm-network -p 5432:5432 -e POSTGRES_USER=go_user -e POSTGRES_PASSWORD=gofindP123@__ -d postgres:14-alpine

createdb:
	docker exec -it postgres createdb --username=root --owner=root simple_bank

dropdb:
	docker exec -it postgres dropdb simple_bank

migrateup:
	migrate -path migrations -database "$(DB_URL)" -verbose up

new_migration:
	migrate create -ext sql -dir migrations -seq init	

migratedown:
	migrate -path migrations -database "$(DB_URL)" -verbose down


server:
	go run main.go

redis:
	docker run --name redis -p 6379:6379 -d redis:7-alpine
mac_proto:
	brew install protobuf
linux_proto:
	sudo apt install protobuf-compiler
push:
	git push secondorigin branch:feature/teleconferencing  	

secondBranch:
	git push secondorigin branch:feature/teleconferencing  	
grpc_server_code:
	protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative \
    grpc/chat.proto




