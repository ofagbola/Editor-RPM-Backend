## WEBSOCKET-CHAT
### A WebSocket Chat Application in Go

- Article explaining code for `go` beginners line by line: https://medium.com/@parvjn616/building-a-websocket-chat-application-in-go-388fff758575

### Compile and Run
- go run main.go 

when connecing user id must be sent like this
ws://localhost:8080/ws?userID=20

<!-- run migration -->
migrate -database "postgres://user:password@host:port/database?sslmode=disable" -path migrations up
migrate -database "postgres://go_user:gofindP123@__@localhost:5432/go_db?sslmode=disable" -path migrations up
migrate -source /Users/user/Development/websites/games/go/chat_apps/websocket-chat-master/migrations -database postgres://go_user:gofindP123@__@localhost:5432/go_db up 

$ migrate -source migrations -database postgres://go_user:gofindP123@__@localhost:5432/go_db up 2

