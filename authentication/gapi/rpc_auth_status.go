package gapi

import (
	"context"
	// "errors"
	// "time"

	// db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	// "github.com/ofagbola/Editor-RPM-Backend/authentication/util"

	// "github.com/ofagbola/Editor-RPM-Backend/authentication/val"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	// "google.golang.org/genproto/googleapis/rpc/errdetails"
	// "google.golang.org/grpc/codes"
	// "google.golang.org/grpc/status"
	// "google.golang.org/protobuf/types/known/timestamppb"
)

func (server *Server) AuthStatus(ctx context.Context, req *pb.AuthStatusRequest) (*pb.AuthStatusResponse, error) {

	_, err := server.tokenMaker.VerifyToken(req.RefreshToken)
	if err != nil {
		return &pb.AuthStatusResponse{
			IsAuthenticated: false,
			Error:           unauthenticatedError(err).Error(),
		}, nil
	}

	// session, err := server.store.GetSession(ctx, validatePayload.ID)
	// if err != nil {
	// 	if errors.Is(err, db.ErrRecordNotFound) {
	// 		return &pb.AuthStatusResponse{
	// 			IsAuthenticated: false,
	// 			Error:           status.Errorf(codes.NotFound, "Session not found").Error(),
	// 		}, nil
	// 	}
	// 	return &pb.AuthStatusResponse{
	// 		IsAuthenticated: false,
	// 		Error:           status.Errorf(codes.Internal, "failed to find Session: %v", err).Error(),
	// 	}, nil
	// }

	// if session.IsBlocked {
	// 	return &pb.AuthStatusResponse{
	// 		IsAuthenticated: false,
	// 		Error:           status.Errorf(codes.PermissionDenied, "blocked session").Error(),
	// 	}, nil
	// }

	// if session.Username != validatePayload.Username {
	// 	return &pb.AuthStatusResponse{
	// 		IsAuthenticated: false,
	// 		Error:           status.Errorf(codes.PermissionDenied, "incorrect session user").Error(),
	// 	}, nil
	// }

	// if session.RefreshToken != req.RefreshToken {
	// 	return &pb.AuthStatusResponse{
	// 		IsAuthenticated: false,
	// 		Error:           status.Errorf(codes.PermissionDenied, "mismatched session token").Error(),
	// 	}, nil
	// }

	// if time.Now().After(session.ExpiresAt) {
	// 	return &pb.AuthStatusResponse{
	// 		IsAuthenticated: false,
	// 		Error:           status.Errorf(codes.PermissionDenied, "expired session").Error(),
	// 	}, nil
	// }

	rsp := &pb.AuthStatusResponse{
		IsAuthenticated: true,
		Error: "nil",
	}
	return rsp, nil
}
