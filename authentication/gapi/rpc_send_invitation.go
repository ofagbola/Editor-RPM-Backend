package gapi

import (
	"context"
	"errors"
	"time"

	"github.com/hibiken/asynq"
	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/worker"
	"github.com/rs/zerolog/log"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) SendInvitation(ctx context.Context, req *pb.SendInvitationRequest) (*pb.SendInvitationResponse, error) {
	user, err := server.store.GetUser(ctx, req.GetSender())
	if err != nil {
		if errors.Is(err, db.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "user not found")
		}
		return nil, status.Errorf(codes.Internal, "failed to find user")
	}

	if err := server.SendInvitationEmail(ctx, &user); err != nil {
		return nil, err
	}

	rsp := &pb.SendInvitationResponse{
		Successful: true,
	}
	return rsp, nil
}



func (server *Server) SendInvitationEmail(ctx context.Context, user * db.User) error {
	// Create the task payload
	taskPayload := &worker.PayloadSendInvitationEmail{
		Username: user.Username,
	}

	// Define options for the task
	opts := []asynq.Option{
		asynq.MaxRetry(10),
		asynq.ProcessIn(10 * time.Second),
		asynq.Queue(worker.QueueCritical),
	}

	// Distribute the task using the task distributor
	if err := server.taskDistributor.DistributeTaskSendInvitationEmail(ctx, taskPayload, opts...); err != nil {
		// Log and return an internal error status if the task distribution fails
		log.Error().Err(err).Msg("Failed to distribute verify email task")
		return status.Errorf(codes.Internal, "failed to distribute verify email task: %s", err)
	}

	// Log successful task distribution
	log.Info().Msgf("Successfully distributed verify email task for user: %s", user.Username)

	return nil
}
