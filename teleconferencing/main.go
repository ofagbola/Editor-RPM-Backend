package main

import (
	"fmt"
	"log"
	"net/http"
	// "websocket-chat/constants"
	"websocket-chat/constants"
	"websocket-chat/dboperations"
	"websocket-chat/services"
	chat_grpc "websocket-chat/grpc"
	"google.golang.org/grpc"
    "net"

)

// var redisClient *redis.Client



func main() {
    // Connect to Database
    db, dbErr := dboperations.ConnectToDatabase(constants.PostgresConnectionString)
    if dbErr != nil {
        log.Fatal("Failed to start Database", dbErr)
    }

    // Create a new gRPC server
    grpcServer := grpc.NewServer()

    // Register the ChatService server
    chat_grpc.RegisterChatServiceServer(grpcServer, &services.ChatServiceServer{})

    // Start the gRPC server in a separate goroutine
    go func() {
        // Create a listener on TCP port 50051
        lis, err := net.Listen("tcp", ":50051")
        if err != nil {
            log.Fatalf("Failed to listen: %v", err)
        }

        // Start the server
        log.Println("gRPC Server started listening on port 50051...")
        if err := grpcServer.Serve(lis); err != nil {
            log.Fatalf("Failed to serve: %v", err)
        }
    }()

    // Set up user connection manager
    ucm := services.NewUserConnectionManager()

    // Set up HTTP routes
    http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
        services.HandleWebSocketConnections(ucm, w, r, db)
    })
    http.HandleFunc("/upload/", func(w http.ResponseWriter, r *http.Request) {
        services.UploadFile(ucm, w, r, db)
    })
    http.HandleFunc("/", handleHTTP)
    http.Handle("/uploads/", http.StripPrefix("/uploads/", http.FileServer(http.Dir("./uploads"))))

    // Start the HTTP server
    go func() {
        log.Println("Starting HTTP server on :8082")
        if err := http.ListenAndServe(":8082", nil); err != nil {
            log.Fatal("HTTP server error:", err)
        }
    }()

    // Start the WebSocket server
    log.Println("Starting WebSocket server on port 8084...")
    if err := http.ListenAndServe(":8084", nil); err != nil {
        log.Fatal("WebSocket server error:", err)
    }
}



// func main() {

	

// 	// connect to Database
// 	db, db_err := dboperations.ConnectToDatabase(constants.PostgresConnectionString)

// 	if db_err != nil {
// 		log.Fatal("Failed to start Database", db_err)
// 	}
// 	 // for setting up user connection

// 	ucm := services.NewUserConnectionManager()

// 	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
// 		services.HandleWebSocketConnections(ucm, w, r, db)
// 	})
	

// 	go func() {
// 		log.Println("Starting HTTP server on :8082")
// 		if err := http.ListenAndServe(":8082", nil); err != nil {
// 			log.Fatal("WebSocket server error:", err)
// 		}
// 	}()
// 	// http.HandleFunc("/upload", func(w http.ResponseWriter, r *http.Request) { services.HandleFileUpload(ucm, w, r, db) })
// 	http.HandleFunc("/upload/", func(w http.ResponseWriter, r *http.Request) { services.UploadFile(ucm, w, r, db) })

// 	http.HandleFunc("/", handleHTTP)

// 	// Serve files in the uploads directory
// 	http.Handle("/uploads/", http.StripPrefix("/uploads/", http.FileServer(http.Dir("./uploads"))))

// 	log.Println("Starting WebSocket server on port 8080...")
// 	// start http server
// 	err := http.ListenAndServe(":8080", nil)
// 	if err != nil {
// 		log.Fatal("Failed to start WebSocket server:", err)
// 	}
// }

func handleHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hello, HTTP!")
}



func mainBlo() {
    // Connect to Database
    db, dbErr := dboperations.ConnectToDatabase(constants.PostgresConnectionString)
    if dbErr != nil {
        log.Fatal("Failed to start Database", dbErr)
    }
	ucm := services.NewUserConnectionManager()
    // Create a listener for HTTP server
    http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
        services.HandleWebSocketConnections(ucm, w, r, db)
    })

    go func() {
        // Start HTTP server
        log.Println("Starting HTTP server on :8082")
        if err := http.ListenAndServe(":8082", nil); err != nil {
            log.Fatal("WebSocket server error:", err)
        }
    }()

    // Register HTTP routes
    http.HandleFunc("/upload/", func(w http.ResponseWriter, r *http.Request) {
        services.UploadFile(ucm, w, r, db)
    })
    http.HandleFunc("/", handleHTTP)
    http.Handle("/uploads/", http.StripPrefix("/uploads/", http.FileServer(http.Dir("./uploads"))))

    // Start gRPC server
    go func() {
        // Create a listener on TCP port 50051
        lis, err := net.Listen("tcp", ":50051")
        if err != nil {
            log.Fatalf("Failed to listen: %v", err)
        }
        
        // Create a new gRPC server
        grpcServer := grpc.NewServer()
        
        // Register the ChatService server
        chat_grpc.RegisterChatServiceServer(grpcServer, &services.ChatServiceServer{})
        
        // Start the server
        log.Println("Server started listening on port 50051...")
        if err := grpcServer.Serve(lis); err != nil {
            log.Fatalf("Failed to serve: %v", err)
        }
    }()

    // Block indefinitely to keep the main goroutine running
    select {}
}


// 1. ability to send message throught a websocket
// send message to specifiic user
// check if user is online
// 2. ability to send message to specific list of users, an array it might be 1 user (with this the doctor can send message to more than 1 user at onces): Done
// Set up postgresql database: Done
// 3. ability to save messages in an array for each user id, new record is saved for the user every day using created at: so we will have database migration as such, user_id, recipient_id,
// message_array, created_at, updated_at. The message array, has individual array with the message_sent, doc or attachement_id voice_record_id, missed_call, missed_video_call, call (with duration), video session (with duration) id_of_sender,  read_at,created_at, message_type(doc, text or voice message, voice call or video call):Done
// Table in 3 is chat table, to do a search, you will have to fetch all the message_sent and filter them
// 4. create a table to store file (video, audio and text files) with id, file_url, file_location, file_type,created_at, deleted (for delete_docs,) deleted_at:Done
//
