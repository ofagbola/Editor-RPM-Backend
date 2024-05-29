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
