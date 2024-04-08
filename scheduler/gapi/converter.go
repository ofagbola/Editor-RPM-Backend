package gapi

import (
	db "github.com/ofagbola/Editor-RPM-Backend/scheduler/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/scheduler/pb"

	"google.golang.org/protobuf/types/known/timestamppb"
)

func convertSchedule(schedule db.Schedule) *pb.Schedule {
	return &pb.Schedule{
		Recepient: schedule.Recepient,
		Initiator: schedule.Initiator,
		TimeSlot:  schedule.TimeSlot,
		CreatedAt: timestamppb.New(schedule.CreatedAt),
	}
}
