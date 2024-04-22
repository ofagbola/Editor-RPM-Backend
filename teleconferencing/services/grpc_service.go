package services

import (
	context "context"
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

// func (s *ChatServiceServer) FetchChatList(ctx context.Context, req *chat_grpc.ChatListRequest) (*chat_grpc.ChatResponse, error) {
//     // Sample response
//     chat1 := &chat_grpc.Chat{
//         Id:        "1",
//         RecipientId:    "user1",
//         Text:      "Hello!",
//         Timestamp: "1619451661",
//     }
//     chat2 := &chat_grpc.Chat{
//         Id:        "2",
//         RecipientId:    "user1",
//         Text:      "Hi there!",
//         Timestamp: "1619451661",
//     }

//     // Construct the response
//     resp := &chat_grpc.ChatResponse{
//         Chats: []*chat_grpc.Chat{chat1, chat2},
//         HasMoreChats: false,
//     }

//     return resp, nil
// }


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
			DocumentUrl:   message.DocumentURL,
			MessageType:   message.MessageType,
			Text:          message.MessageSent,
			ReadAt:        message.ReadAt,
			Timestamp:     message.CreatedAt,
			RecipientId:   strconv.Itoa(message.RecipientID),
			RecipientName: user.FirstName + " " + user.LastName,
			Missed:        strings.Contains(strings.ToLower(message.MessageType), "missed"),
			RecipientBase64: user.Image,
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


// Helper function to convert the fetched Chat struct to the gRPC Chat struct
// func convertToGrpcChat(chat Chat) *chat_grpc.Chat {
//     return &chat_grpc.Chat{
//         Id: chat.Id,
//         RecipientId: chat.RecipientId,
//         RecipientName: chat.RecipientName,
//         Text: chat.MessageArray[len(chat.MessageArray)-1].Text,
//         Timestamp: chat.MessageArray[len(chat.MessageArray)-1].Timestamp,
//         ReadAt: chat.MessageArray[len(chat.MessageArray)-1].ReadAt,
//         MessageType: chat.MessageArray[len(chat.MessageArray)-1].MessageType,
//         DocumentUrl: chat.MessageArray[len(chat.MessageArray)-1].DocumentUrl,
//         Missed: chat.MessageArray[len(chat.MessageArray)-1].Missed,
//     }
// }

func (s *ChatServiceServer) Testing(ctx context.Context, req *chat_grpc.Test) (*chat_grpc.Test, error) {
	// Sample response
	log.Println("this is thesting")
	chat1 := &chat_grpc.Test{
		Name: req.GetName() + "Damilare Abefe",
	}

	return chat1, nil
}
