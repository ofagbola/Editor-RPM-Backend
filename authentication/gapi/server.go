package gapi

import (
	"fmt"

	db "github.com/ofagbola/Editor-RPM-Backend/authentication/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/pb"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/token"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/util"
	"github.com/ofagbola/Editor-RPM-Backend/authentication/worker"
)

// Server serves gRPC requests for our Authentication service.
type Server struct {
	pb.UnimplementedAuthenticationServiceServer
	config          util.Config
	store           db.Store
	tokenMaker      token.Maker
	taskDistributor worker.TaskDistributor
}

// NewServer creates a new gRPC server.
func NewServer(config util.Config, store db.Store, taskDistributor worker.TaskDistributor) (*Server, error) {
	tokenMaker, err := token.NewPasetoMaker(config.TokenSymmetricKey)
	if err != nil {
		return nil, fmt.Errorf("cannot create token maker: %w", err)
	}

	server := &Server{
		config:          config,
		store:           store,
		tokenMaker:      tokenMaker,
		taskDistributor: taskDistributor,
	}

	return server, nil
}