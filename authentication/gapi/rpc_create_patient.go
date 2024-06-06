package gapi

import (
	"context"

	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/util"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (server *Server) CreatePatient(ctx context.Context, req *pb.CreatePatientRequest) (*pb.CreatePatientResponse, error) {
	authPayload, err := server.authorizeUser(ctx, []string{util.PatientRole, util.AdminRole})

	if err != nil {
		return nil, unauthenticatedError(err)
	}

	arg := db.CreatePatientTxParams{
		CreatePatientParams: db.CreatePatientParams{
			Username:             authPayload.Username,
			MedicalHistory:       req.GetMedicalHistory(),
			Provider:             req.GetProvider(),
			OutOfNetworkExpenses: req.GetOutOfNetworkExpenses(),
			OutOfPocketExpenses:  req.GetOutOfPocketExpenses(),
			Image:                req.GetImage(),
			CoPay:                req.GetCoPay(),
		},
	}

	txResult, err := server.store.CreatePatientTx(ctx, arg)
	if err != nil {
		if db.ErrorCode(err) == db.UniqueViolation {
			return nil, status.Errorf(codes.AlreadyExists, err.Error())
		}
		return nil, status.Errorf(codes.Internal, "failed to create Patient: %s", err)
	}

	rsp := &pb.CreatePatientResponse{
		Patient: convertPatient(txResult.Patient),
	}
	return rsp, nil
}
