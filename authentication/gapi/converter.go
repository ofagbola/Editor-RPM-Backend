package gapi

import (
	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	pb "github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func convertUser(user db.User) *pb.User {
	return &pb.User{
		Username:          user.Username,
		FirstName:         user.FirstName,
		LastName:          user.LastName,
		Role:              user.Role,
		Dob:               user.Dob,
		Gender:            user.Gender,
		Location:          user.Location,
		Language:          user.Language,
		Ethnicity:         user.Ethnicity,
		Email:             user.Email,
		PasswordChangedAt: timestamppb.New(user.PasswordChangedAt),
		CreatedAt:         timestamppb.New(user.CreatedAt),
	}
}

func convertPatient(patient db.Patient) *pb.Patient {
	return &pb.Patient{
		MedicalHistory:       patient.MedicalHistory,
		Provider:             patient.Provider,
		OutOfNetworkExpenses: patient.OutOfNetworkExpenses,
		OutOfPocketExpenses:  patient.OutOfPocketExpenses,
		Image:                patient.Image,
		CoPay:                patient.CoPay,
		CreatedAt:            timestamppb.New(patient.CreatedAt),
	}
}

func convertClinician(clinician db.Clinician) *pb.Clinician {
	return &pb.Clinician{
		Credentials:   clinician.Credentials,
		Specialities:  clinician.Specialities,
		ClinicName:    clinician.ClinicName,
		ClinicId:      clinician.ClinicID,
		Image:         clinician.Image,
		AcceptPatient: clinician.AcceptPatient,
		CreatedAt:     timestamppb.New(clinician.CreatedAt),
	}
}