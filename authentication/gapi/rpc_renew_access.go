package gapi

import (
	"context"
	"errors"
	"time"

	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func (server *Server) RenewAccess(ctx context.Context, req *pb.RenewAccessRequest) (*pb.RenewAccessResponse, error) {
	// todo: string violation
	refreshPayload, err := server.tokenMaker.VerifyToken(req.RefreshToken)
	if err != nil {
		return nil, unauthenticatedError(err)
	}

	session, err := server.store.GetSession(ctx, refreshPayload.ID)
	if err != nil {
		if errors.Is(err, db.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "Session Id not found")
		}
		return nil, status.Errorf(codes.Internal, "failed to find Session")
	}

	if session.IsBlocked {
		return nil, status.Errorf(codes.PermissionDenied, "blocked session")
	}

	if session.Username != refreshPayload.Username {
		return nil, status.Errorf(codes.PermissionDenied, "incorrect session user")
	}

	if session.RefreshToken != req.RefreshToken {
		return nil, status.Errorf(codes.PermissionDenied, "mismatched session token")
	}

	if time.Now().After(session.ExpiresAt) {
		return nil, status.Errorf(codes.PermissionDenied, "expired session")
	}

	accessToken, accessPayload, err := server.tokenMaker.CreateToken(
		refreshPayload.Username,
		refreshPayload.Role,
		server.config.AccessTokenDuration,
	)
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to create refresh token")
	}

	rsp := &pb.RenewAccessResponse{
		AccessToken:          accessToken,
		AccessTokenExpiresAt:  timestamppb.New(accessPayload.ExpiredAt),
	}
	return rsp, nil
}


