package services

import (
	context "context"
	// "encoding/json"
	"fmt"
	"log"
	"strconv"
	"strings"
	dboperations "websocket-chat/dboperations"
	chat_grpc "websocket-chat/grpc"
)

type ChatServiceServer struct {
	chat_grpc.UnimplementedChatServiceServer
}

func (s *ChatServiceServer) FetchOneOnOneChat(ctx context.Context, req *chat_grpc.OneOnOneChatRequest) (*chat_grpc.ChatResponse, error) {
	fmt.Println("fetoneonone chat called")
	mwssageList, _, _,err := dboperations.GetChatRecords(req.UserId,req.RecipientId,1,5)
	if err!=nil{
		fmt.Println("get chat error:",err)
	}

	// Allocate memory for chatSlice
	chatSlice := make([]*chat_grpc.Chat, 0)
	for _, message := range mwssageList {
		// fetch user details 
		var user_id int
		user_id=message.RecipientID
		if strconv.Itoa(message.RecipientID) == req.UserId {
			user_id = message.IDOfSender
		}
		

		user, err := dboperations.FetchUser(user_id)
		if err != nil {
			return nil, err
		}
		chatMessages := &chat_grpc.Chat{
			DocumentUrl:   message.DocumentURL,
			MessageType:   message.MessageType,
			Text:          message.MessageSent,
			ReadAt:        message.ReadAt,
			Timestamp:     message.CreatedAt,
			RecipientId:   strconv.Itoa(message.RecipientID),
			RecipientName: user.FirstName + " " + user.LastName,
			Missed:        strings.Contains(strings.ToLower(message.MessageType), "missed"),
			Image: user.Image,
			Id: strconv.Itoa(message.IDOfSender),
		}
	
		// Append chatMessages to chatSlice
		chatSlice = append(chatSlice, chatMessages)
	}
	// Construct the response
	resp := &chat_grpc.ChatResponse{
		Chats:        chatSlice,
		HasMoreChats: false,
	}
	return resp, nil
}


func (s *ChatServiceServer) FetchChatList(ctx context.Context, req *chat_grpc.ChatListRequest) (*chat_grpc.ChatResponse, error) {
	// Fetch the last item from the chat table for the given UserId
	fmt.Println(req.UserId)
	lastMessages, err := dboperations.FetchChatsList(req.UserId)
	if err != nil {
		return nil, err
	}
	fmt.Println("last messag ",lastMessages)

	// Allocate memory for chatSlice
	chatSlice := make([]*chat_grpc.Chat, 0)

	// Iterate over lastMessages and convert each message to chat_grpc.Chat
	for _, message := range lastMessages {
		// fetch user details 
		var user_id int
		user_id=message.RecipientID
		if strconv.Itoa(message.RecipientID) == req.UserId {
			user_id = message.IDOfSender
		}
		

		user, err := dboperations.FetchUser(user_id)
		if err != nil {
			return nil, err
		}
		chatMessages := &chat_grpc.Chat{
			Image: user.Image,
			DocumentUrl:   message.DocumentURL,
			MessageType:   message.MessageType,
			Text:          message.MessageSent,
			ReadAt:        message.ReadAt,
			Timestamp:     message.CreatedAt,
			RecipientId:   strconv.Itoa(message.RecipientID),
			RecipientName: user.FirstName + " " + user.LastName,
			Missed:        strings.Contains(strings.ToLower(message.MessageType), "missed"),
			Id: strconv.Itoa(message.IDOfSender),
			
		}
		fmt.Println(string(user.Image))

		// Append chatMessages to chatSlice
		chatSlice = append(chatSlice, chatMessages)
	}

	// Construct the response
	resp := &chat_grpc.ChatResponse{
		Chats:        chatSlice,
		HasMoreChats: true,
	}

	return resp, nil
}



func (s *ChatServiceServer) Testing(ctx context.Context, req *chat_grpc.Test) (*chat_grpc.Test, error) {
	// Sample response
	log.Println("this is thesting")
	chat1 := &chat_grpc.Test{
		Name: req.GetName() + "Damilare Abefe",
	}

	return chat1, nil
}
