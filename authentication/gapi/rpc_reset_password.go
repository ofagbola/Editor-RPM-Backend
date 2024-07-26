package gapi

import (
	"context"
	"errors"
	"time"

	"github.com/jackc/pgx/v5/pgtype"
	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	pb "github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/util"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/val"
	"google.golang.org/genproto/googleapis/rpc/errdetails"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) ResetPassword(ctx context.Context, req *pb.ResetPasswordRequest) (*pb.ResetPasswordResponse, error) {

	violations := validateResetPasswordRequest(req)
	if violations != nil {
		return nil, invalidArgumentError(violations)
	}

	
	// verify if the forgot password verification is set to true
	verifyIsUsed, err := server.store.GetVerifyForgotPassword(ctx, req.GetUsername())
	if err != nil {
		if errors.Is(err, db.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "verify-forgot-password not found")
		}
		return nil, status.Errorf(codes.Internal, "failed to find verify-forgot-password")
	}

	if !verifyIsUsed.IsUsed {
		return nil, status.Errorf(codes.Internal, "forgot password can't be set; error verifying verify-forgot-password authencity")
	}


	userPasswordCheck, err := server.store.GetUser(ctx, req.GetUsername())
	if err != nil {
		if errors.Is(err, db.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "user not found")
		}
		return nil, status.Errorf(codes.Internal, "failed to find user")
	}

	if userPasswordCheck.Email != verifyIsUsed.Email {
		return nil, status.Errorf(codes.Internal, "forgot password can't be set; data inconsistency found")

	}


	arg := db.UpdateUserParams{
		Username: req.GetUsername(),
	}

	hashedPassword, err := util.HashPassword(req.GetPassword())
	if err != nil {
		return nil, status.Errorf(codes.Internal, "failed to hash password: %s", err)
	}

	arg.HashedPassword = pgtype.Text{
		String: hashedPassword,
		Valid:  true,
	}

	arg.PasswordChangedAt = pgtype.Timestamptz{
		Time:  time.Now(),
		Valid: true,
	}

	user, err := server.store.UpdateUser(ctx, arg)
	if err != nil {
		if errors.Is(err, db.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "user not found")
		}
		return nil, status.Errorf(codes.Internal, "failed to reset password: %s", err)
	}

	rsp := &pb.ResetPasswordResponse{
		User: convertUser(user),
	}
	return rsp, nil
}

func validateResetPasswordRequest(req *pb.ResetPasswordRequest) (violations []*errdetails.BadRequest_FieldViolation) {
	if err := val.ValidateUsernameOrEmail(req.GetUsername()); err != nil {
		violations = append(violations, fieldViolation("username", err))
	}
	
	if err := val.ValidatePassword(req.GetPassword()); err != nil {
		violations = append(violations, fieldViolation("password", err))

	}

	return violations
}
