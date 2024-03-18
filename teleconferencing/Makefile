
DB_URL=postgres://root:gofindP123@__@localhost:5432/postgres_teleconferencing_db?sslmode=disable

network:
	docker network create erpm-network	

postgres:
	docker run --name postgres-teleconferencing --network erpm-network -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=gofindP123@__ -d postgres:14-alpine

createdb:
	docker exec -it postgres-teleconferencing createdb --username=root --owner=root postgres_teleconferencing_db

dropdb:
	docker exec -it postgres-teleconferencing dropdb postgres_teleconferencing_db

migrateup:
	migrate -path migrations -database "$(DB_URL)" -verbose up

new_migration:
	migrate create -ext sql -dir migrations -seq init	

migratedown:
	migrate -path migrations -database "$(DB_URL)" -verbose down

server:
	go run main.go

redis:
	docker run --name redis-teleconferencing -p 6379:6379 -d redis:7-alpine
mac_proto:
	brew install protobuf
linux_proto:
	sudo apt install protobuf-compiler
push:
	git push secondorigin branch:feature/teleconferencing  	

.PHONY: network postgres createdb server createdb



