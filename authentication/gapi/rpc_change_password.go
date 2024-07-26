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

func (server *Server) ChangePassword(ctx context.Context, req *pb.ChangePasswordRequest) (*pb.ChangePasswordResponse, error) {

	authPayload, err := server.authorizeUser(ctx, []string{util.PatientRole, util.ClinicianRole, util.AdminRole})
	if err != nil {
		return nil, unauthenticatedError(err)
	}

	violations := validateChangePasswordRequest(req)
	if violations != nil {
		return nil, invalidArgumentError(violations)
	}

	if authPayload.Role != util.AdminRole && authPayload.Username != req.GetUsername() {
		return nil, status.Errorf(codes.PermissionDenied, "cannot update other user's info")
	}

	arg := db.UpdateUserParams{
		Username: req.GetUsername(),
	}

	if req.CurrentPassword == req.NewPassword {
		return nil, status.Errorf(codes.PermissionDenied, "current and new password cannot be the same")
	}

	userPasswordCheck, err := server.store.GetUser(ctx, req.GetUsername())
	if err != nil {
		if errors.Is(err, db.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "user not found")
		}
		return nil, status.Errorf(codes.Internal, "failed to find user")
	}

	err = util.CheckPassword(req.CurrentPassword, userPasswordCheck.HashedPassword)
	if err != nil {
		return nil, status.Errorf(codes.NotFound, "incorrect password")
	}

	hashedPassword, err := util.HashPassword(req.GetNewPassword())
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

	rsp := &pb.ChangePasswordResponse{
		User: convertUser(user),
	}
	return rsp, nil
}

func validateChangePasswordRequest(req *pb.ChangePasswordRequest) (violations []*errdetails.BadRequest_FieldViolation) {

	if err := val.ValidatePassword(req.GetNewPassword()); err != nil {
		violations = append(violations, fieldViolation("password", err))
	}

	if err := val.ValidatePassword(req.GetCurrentPassword()); err != nil {
		violations = append(violations, fieldViolation("password", err))

	}
	return violations
}
