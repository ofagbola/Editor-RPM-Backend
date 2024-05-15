package gapi

import (
	db "github.com/ofagbola/Editor-RPM-Backend/scheduler/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/scheduler/pb"
	"github.com/ofagbola/Editor-RPM-Backend/scheduler/util"
)

// Server serves gRPC requests for our delivery service.
type Server struct {
	pb.UnimplementedSchedulerServiceServer
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
