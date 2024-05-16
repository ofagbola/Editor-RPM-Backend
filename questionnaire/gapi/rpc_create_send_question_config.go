package gapi

import (
	"context"

	db "github.com/ofagbola/Editor-RPM-Backend/questionnaire/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/questionnaire/pb"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) CreateSendQuestionConfig(ctx context.Context, req *pb.CreateSendQuestionConfigRequest) (*pb.CreateSendQuestionConfigResponse, error) {

	arg := db.CreateSendQuestionConfigTxParams{
		CreateSendQuestionConfigParams: db.CreateSendQuestionConfigParams{
			QuestionConfigID: req.GetQuestionConfigId(),
			Recipient:        req.GetRecipient(),
			Sender:           req.GetSender(),
		},
		// TODO: notify user
	}
	txResult, err := server.store.CreateSendQuestionConfigTx(ctx, arg)
	if err != nil {
		if db.ErrorCode(err) == db.UniqueViolation {
			return nil, status.Errorf(codes.AlreadyExists, err.Error())
		}
		return nil, status.Errorf(codes.Internal, "failed to create questionConfig: %s", err)
	}

	rsp := &pb.CreateSendQuestionConfigResponse{
		SendQuestionConfig: convertSendQuestionConfig(txResult.SendQuestionConfig),
	}
	return rsp, nil
}
