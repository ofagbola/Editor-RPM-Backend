package services

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var AllRooms RoomMap

func CreateRoomRequestHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	roomID := AllRooms.CreateRoom()

	type resp struct {
		RoomID string `json:"room_id"`
	}

	log.Println(AllRooms.Map)
	json.NewEncoder(w).Encode(resp{RoomID: roomID})
}



type broadcastMsg struct {
	Message map[string]interface{}
	RoomID  string
	Client  *websocket.Conn
}

var broadcast = make(chan broadcastMsg)

func broadcaster() {
	for {
		msg := <-broadcast
		for _, client := range AllRooms.Map[msg.RoomID] {
			if client.Conn != msg.Client {
				err := client.Conn.WriteJSON(msg.Message)

				if err != nil {
					// log.Fatal(err)
					fmt.Println(err)
					client.Conn.Close()
				}

			}
		}
	}
}

func JoinRoomRequestHandler(w http.ResponseWriter, r *http.Request) {
	// get room id from the http request 
	roomID, ok := r.URL.Query()["roomID"]
	if !ok {
		log.Println("RoomID missing in URL Parameters")
		return
	}

	// upgrade ttp request to websocket
	ws, err := upgrader.Upgrade(w, r, nil)

	if err != nil {
		fmt.Println(err)
		log.Fatal("Web Socket Upgrade Error", err)
	}

	// insert user into the room
	AllRooms.InsertIntoRoom(roomID[0], false, ws)

	// run broadcast to send message to other user in the room
	go broadcaster()

	for {
		//  get broadcastMsg data
		var msg broadcastMsg

		err := ws.ReadJSON(&msg.Message)
		if err != nil {
			// log.Fatal("Read Error:", err)
			fmt.Println(err)
		}

		//  put the msg into broadcast to send to other user
		msg.Client = ws
		msg.RoomID = roomID[0]

		log.Println(msg.Message)

		broadcast <- msg

	}

}
