package gapi

import (
	"context"

	db "github.com/ofagbola/Editor-RPM-Backend/questionnaire/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/questionnaire/pb"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) CreateResponseQuestionConfig(ctx context.Context, req *pb.CreateResponseQuestionConfigRequest) (*pb.CreateResponseQuestionConfigResponse, error) {

	arg := db.CreateResponseQuestionConfigTxParams{
		CreateResponseQuestionConfigParams: db.CreateResponseQuestionConfigParams{
			QuestionConfigID: req.GetQuestionConfigId(),
			Patient:          req.GetPatient(),
			Response:         req.GetResponse(),
		},
		// TODO: notify user
	}
	txResult, err := server.store.CreateResponseQuestionConfigTx(ctx, arg)
	if err != nil {
		if db.ErrorCode(err) == db.UniqueViolation {
			return nil, status.Errorf(codes.AlreadyExists, err.Error())
		}
		return nil, status.Errorf(codes.Internal, "failed to create response for questionConfig: %s", err)
	}

	rsp := &pb.CreateResponseQuestionConfigResponse{
		ResponseQuestionConfig: convertResponseQuestionConfig(txResult.ResponseQuestionConfig),
	}
	return rsp, nil
}
