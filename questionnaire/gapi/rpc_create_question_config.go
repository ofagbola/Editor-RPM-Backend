package gapi

import (
	"context"

	db "github.com/ofagbola/Editor-RPM-Backend/questionnaire/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/questionnaire/pb"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) CreateQuestionConfig(ctx context.Context, req *pb.CreateQuestionConfigRequest) (*pb.CreateQuestionConfigResponse, error) {

	arg := db.CreateQuestionConfigTxParams{
		CreateQuestionConfigParams: db.CreateQuestionConfigParams{
			Title:       req.GetTitle(),
			Description: req.GetDescription(),
			Questions:   req.GetQuestions(),
			CreatedBy:   req.GetCreatedBy(),
		},
		// TODO: notify user
		// AfterCreate: func(questionConfig db.QuestionConfig) error {
		// 	//notify user
		// }
	}
	txResult, err := server.store.CreateQuestionConfigTx(ctx, arg)
	if err != nil {
		if db.ErrorCode(err) == db.UniqueViolation {
			return nil, status.Errorf(codes.AlreadyExists, err.Error())
		}
		return nil, status.Errorf(codes.Internal, "failed to create questionConfig: %s", err)
	}

	rsp := &pb.CreateQuestionConfigResponse{
		QuestionConfig: convertQuestionConfig(txResult.QuestionConfig),
	}
	return rsp, nil
}
