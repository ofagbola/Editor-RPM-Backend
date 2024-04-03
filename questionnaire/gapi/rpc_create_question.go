package gapi

import (
	"context"

	db "github.com/ofagbola/Editor-RPM-Backend/questionnaire/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/questionnaire/pb"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) CreateQuestion(ctx context.Context, req *pb.CreateQuestionRequest) (*pb.CreateQuestionResponse, error) {

	arg := db.CreateQuestionTxParams{
		CreateQuestionParams: db.CreateQuestionParams{
			Title:      req.GetTitle(),
			InputField: req.GetInputField(),
			Options:    req.GetOptions(),
			CreatedBy:  req.GetCreatedBy(),
		},
		// TODO: notify user
		// AfterCreate: func(question db.Question) error {
		// 	//notify user
		// }
	}
	txResult, err := server.store.CreateQuestionTx(ctx, arg)
	if err != nil {
		if db.ErrorCode(err) == db.UniqueViolation {
			return nil, status.Errorf(codes.AlreadyExists, err.Error())
		}
		return nil, status.Errorf(codes.Internal, "failed to create question: %s", err)
	}

	rsp := &pb.CreateQuestionResponse{
		Question: convertQuestion(txResult.Question),
	}
	return rsp, nil
}
