package gapi

import (
	"context"
	"errors"

	"github.com/jackc/pgx/v5/pgtype"
	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	pb "github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/util"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) UpdatePatient(ctx context.Context, req *pb.UpdatePatientRequest) (*pb.UpdatePatientResponse, error) {
	authPayload, err := server.authorizeUser(ctx, []string{util.PatientRole, util.AdminRole})
	if err != nil {
		return nil, unauthenticatedError(err)
	}

	if  authPayload.Role != util.PatientRole && authPayload.Username != req.GetUsername() {
		return nil, status.Errorf(codes.PermissionDenied, "cannot update other patient's info")
	}
	
	arg := db.UpdatePatientParams{
		Username: req.GetUsername(),
		MedicalHistory: req.GetMedicalHistory(),

		Provider: pgtype.Text{
			String: req.GetProvider(),
			Valid:  req.Provider != nil,
		},

		OutOfNetworkExpenses: pgtype.Text{
			String: req.GetOutOfNetworkExpenses(),
			Valid:  req.OutOfNetworkExpenses != nil,
		},

		OutOfPocketExpenses: pgtype.Text{
			String: req.GetOutOfPocketExpenses(),
			Valid:  req.OutOfPocketExpenses != nil,
		},

		CoPay: pgtype.Text{
			String: req.GetCoPay(),
			Valid:  req.CoPay != nil,
		},

		Image: pgtype.Text{
			String: req.GetImage(),
			Valid:  req.Image != nil,
		},
	}

	patient, err := server.store.UpdatePatient(ctx, arg)
	if err != nil {
		if errors.Is(err, db.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "patient not found")
		}
		return nil, status.Errorf(codes.Internal, "failed to update patient: %s", err)
	}

	rsp := &pb.UpdatePatientResponse{
		Patient: convertPatient(patient),
	}
	return rsp, nil
}