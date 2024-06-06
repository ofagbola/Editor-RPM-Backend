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

func (server *Server) UpdateClinician(ctx context.Context, req *pb.UpdateClinicianRequest) (*pb.UpdateClinicianResponse, error) {
	authPayload, err := server.authorizeUser(ctx, []string{util.ClinicianRole, util.AdminRole})
	if err != nil {
		return nil, unauthenticatedError(err)
	}

	if authPayload.Role != util.AdminRole && authPayload.Username != req.GetUsername() {
		return nil, status.Errorf(codes.PermissionDenied, "cannot update other clinician's info")
	}
	
	arg := db.UpdateClinicianParams{
		Username: req.GetUsername(),
		Credentials: req.GetCredentials(),
		Specialities: req.GetSpecialities(),
 
		ClinicName: pgtype.Text{   
			String: req.GetClinicName(),
			Valid:  req.ClinicName != nil,
		},

		ClinicID: pgtype.Text{
			String: req.GetClinicId(),
			Valid:  req.ClinicId != nil, 
		},

		AcceptPatient: pgtype.Bool{
			Bool: req.GetAcceptPatient(),
			Valid: req.AcceptPatient != nil,
		},
 
		Image: pgtype.Text{
			String: req.GetImage(),
			Valid:  req.Image != nil,
		},
	}

	clinician, err := server.store.UpdateClinician(ctx, arg)
	if err != nil {
		if errors.Is(err, db.ErrRecordNotFound) {
			return nil, status.Errorf(codes.NotFound, "clinician not found")
		}
		return nil, status.Errorf(codes.Internal, "failed to update clinician: %s", err)
	}

	rsp := &pb.UpdateClinicianResponse{
		Clinician: convertClinician(clinician),
	}
	return rsp, nil
}