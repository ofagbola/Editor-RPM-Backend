package gapi

import (
	"context"

	db "github.com/ofagbola/Editor-RPM-Backend/scheduler/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/scheduler/pb"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) CreateSchedule(ctx context.Context, req *pb.CreateScheduleRequest) (*pb.CreateScheduleResponse, error) {

	arg := db.CreateScheduleTxParams{
		CreateScheduleParams: db.CreateScheduleParams{
			Recipient: req.GetRecipient(),
			Initiator: req.GetInitiator(),
			TimeSlot:  req.GetTimeSlot(),
		},
		// TODO: notify user
		// AfterCreate: func(schedule db.Schedule) error {
		// 	//notify user
		// }
	}
	txResult, err := server.store.CreateScheduleTx(ctx, arg)
	if err != nil {
		if db.ErrorCode(err) == db.UniqueViolation {
			return nil, status.Errorf(codes.AlreadyExists, err.Error())
		}
		return nil, status.Errorf(codes.Internal, "failed to create schedule: %s", err)
	}

	rsp := &pb.CreateScheduleResponse{
		Schedule: convertSchedule(txResult.Schedule),
	}
	return rsp, nil
}
