package main

import (
	"log"
	"net/http"

	// "websocket-chat/constants"
	"websocket-chat/constants"
	"websocket-chat/dboperations"
	"websocket-chat/services"
)

// var redisClient *redis.Client

func main() {
	
	// connect to Database
	db,db_err :=dboperations.ConnectToDatabase(constants.PostgresConnectionString)

	if db_err != nil {
		log.Fatal("Failed to start Database", db_err)
	}
	// for setting up user connection

	ucm := services.NewUserConnectionManager()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		services.HandleWebSocketConnections(ucm, w, r,db)
	})
	http.HandleFunc("/upload", func(w http.ResponseWriter, r *http.Request) {services.HandleFileUpload(ucm, w, r,db)})

	log.Println("Starting WebSocket server on port 8080...")
	// start http server
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("Failed to start WebSocket server:", err)
	}
}

// var upgrader = websocket.Upgrader{
// 	ReadBufferSize:  1024,
// 	WriteBufferSize: 1024,
// 	CheckOrigin: func(r *http.Request) bool {
// 		return true
// 	},
// }

// var clients = make(map[*websocket.Conn]bool)
// var broadcast = make(chan Message)

// type Message struct {
// 	Username string `json:"username"`
// 	Message  string `json:"message"`
// }

// func main() {

// 	// db connection
// 		// Connection parameters
// 		connStr := "host=localhost port=5432 user=go_user password=gofindP123@__ dbname=go_db sslmode=disable"

// 		 dboperations.ConnectToDatabase(connStr)

// 	http.HandleFunc("/", homePage)
// 	http.HandleFunc("/ws", handleConnections)

// 	go handleMessages()

// 	fmt.Println("Server started on :8080")
// 	err := http.ListenAndServe(":8080", nil)

// 	if err!=nil {
// 		fmt.Println(err)
// 	}

// }

// func homePage(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "Welcome to the Chat Room!")
// }

// func handleConnections(w http.ResponseWriter, r *http.Request) {
// 	conn, err := upgrader.Upgrade(w, r, nil)
// 	if err != nil {
// 		fmt.Println(err)
// 		return
// 	}
// 	defer conn.Close()

// 	clients[conn] = true

// 	fmt.
// 	for {
// 		var msg Message
// 		err := conn.ReadJSON(&msg)
// 		if err != nil {
// 			fmt.Println(err)
// 			delete(clients, conn)
// 			return
// 		}

// 		broadcast <- msg
// 	}
// }

// func handleMessages() {
// 	for {
// 		msg := <-broadcast

// 		for client := range clients {
// 			err := client.WriteJSON(msg)
// 			if err != nil {
// 				fmt.Println(err)
// 				client.Close()
// 				delete(clients, client)
// 			}
// 		}
// 	}
// }

// 1. ability to send message throught a websocket
// send message to specifiic user
// check if user is online
// 2. ability to send message to specific list of users, an array it might be 1 user (with this the doctor can send message to more than 1 user at onces): Done
// Set up postgresql database: Done
// 3. ability to save messages in an array for each user id, new record is saved for the user every day using created at: so we will have database migration as such, user_id, recipient_id,
// message_array, created_at, updated_at. The message array, has individual array with the message_sent, doc or attachement_id voice_record_id, missed_call, missed_video_call, call (with duration), video session (with duration) id_of_sender,  read_at,created_at, message_type(doc, text or voice message, voice call or video call)
// Table in 3 is chat table, to do a search, you will have to fetch all the message_sent and filter them
// 4. create a table to store file (video, audio and text files) with id, file_url, file_location, file_type,created_at, deleted (for delete_docs,) deleted_at
//
