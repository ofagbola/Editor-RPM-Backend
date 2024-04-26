package gapi

import (
	db "github.com/ofagbola/Editor-RPM-Backend/questionnaire/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/questionnaire/pb"
	"github.com/ofagbola/Editor-RPM-Backend/questionnaire/util"
)

// Server serves gRPC requests for our delivery service.
type Server struct {
	pb.UnimplementedQuestionnaireServiceServer
	config util.Config
	store  db.Store
}

// NewServer creates a new gRPC server.
func NewServer(config util.Config, store db.Store) (*Server, error) {

	server := &Server{
		config: config,
		store:  store,
	}

	return server, nil
}
