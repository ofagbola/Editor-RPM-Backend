// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v5.26.1
// source: service_authentication.proto

package pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	AuthenticationService_CreateUser_FullMethodName                    = "/pb.AuthenticationService/CreateUser"
	AuthenticationService_GetUser_FullMethodName                       = "/pb.AuthenticationService/GetUser"
	AuthenticationService_GetProfile_FullMethodName                    = "/pb.AuthenticationService/GetProfile"
	AuthenticationService_RenewAccess_FullMethodName                   = "/pb.AuthenticationService/RenewAccess"
	AuthenticationService_AuthStatus_FullMethodName                    = "/pb.AuthenticationService/AuthStatus"
	AuthenticationService_UpdateUser_FullMethodName                    = "/pb.AuthenticationService/UpdateUser"
	AuthenticationService_CreateClinician_FullMethodName               = "/pb.AuthenticationService/CreateClinician"
	AuthenticationService_GetClinician_FullMethodName                  = "/pb.AuthenticationService/GetClinician"
	AuthenticationService_UpdateClinician_FullMethodName               = "/pb.AuthenticationService/UpdateClinician"
	AuthenticationService_CreatePatient_FullMethodName                 = "/pb.AuthenticationService/CreatePatient"
	AuthenticationService_GetPatient_FullMethodName                    = "/pb.AuthenticationService/GetPatient"
	AuthenticationService_UpdatePatient_FullMethodName                 = "/pb.AuthenticationService/UpdatePatient"
	AuthenticationService_LoginUser_FullMethodName                     = "/pb.AuthenticationService/LoginUser"
	AuthenticationService_VerifyEmail_FullMethodName                   = "/pb.AuthenticationService/VerifyEmail"
	AuthenticationService_ForgotPassword_FullMethodName                = "/pb.AuthenticationService/ForgotPassword"
	AuthenticationService_VerifyForgotPassword_FullMethodName          = "/pb.AuthenticationService/VerifyForgotPassword"
	AuthenticationService_ResetPassword_FullMethodName                 = "/pb.AuthenticationService/ResetPassword"
	AuthenticationService_ChangePassword_FullMethodName                = "/pb.AuthenticationService/ChangePassword"
	AuthenticationService_CreatePatientClinicianMapping_FullMethodName = "/pb.AuthenticationService/CreatePatientClinicianMapping"
	AuthenticationService_VerifyInvitation_FullMethodName              = "/pb.AuthenticationService/VerifyInvitation"
)

// AuthenticationServiceClient is the client API for AuthenticationService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AuthenticationServiceClient interface {
	CreateUser(ctx context.Context, in *CreateUserRequest, opts ...grpc.CallOption) (*CreateUserResponse, error)
	GetUser(ctx context.Context, in *GetUserRequest, opts ...grpc.CallOption) (*GetUserResponse, error)
	GetProfile(ctx context.Context, in *GetUserRequest, opts ...grpc.CallOption) (*GetUserResponse, error)
	RenewAccess(ctx context.Context, in *RenewAccessRequest, opts ...grpc.CallOption) (*RenewAccessResponse, error)
	AuthStatus(ctx context.Context, in *AuthStatusRequest, opts ...grpc.CallOption) (*AuthStatusResponse, error)
	UpdateUser(ctx context.Context, in *UpdateUserRequest, opts ...grpc.CallOption) (*UpdateUserResponse, error)
	CreateClinician(ctx context.Context, in *CreateClinicianRequest, opts ...grpc.CallOption) (*CreateClinicianResponse, error)
	GetClinician(ctx context.Context, in *GetClinicianRequest, opts ...grpc.CallOption) (*GetClinicianResponse, error)
	UpdateClinician(ctx context.Context, in *UpdateClinicianRequest, opts ...grpc.CallOption) (*UpdateClinicianResponse, error)
	CreatePatient(ctx context.Context, in *CreatePatientRequest, opts ...grpc.CallOption) (*CreatePatientResponse, error)
	GetPatient(ctx context.Context, in *GetPatientRequest, opts ...grpc.CallOption) (*GetPatientResponse, error)
	UpdatePatient(ctx context.Context, in *UpdatePatientRequest, opts ...grpc.CallOption) (*UpdatePatientResponse, error)
	LoginUser(ctx context.Context, in *LoginUserRequest, opts ...grpc.CallOption) (*LoginUserResponse, error)
	VerifyEmail(ctx context.Context, in *VerifyEmailRequest, opts ...grpc.CallOption) (*VerifyEmailResponse, error)
	ForgotPassword(ctx context.Context, in *ForgotPasswordRequest, opts ...grpc.CallOption) (*ForgotPasswordResponse, error)
	VerifyForgotPassword(ctx context.Context, in *VerifyForgotPasswordRequest, opts ...grpc.CallOption) (*VerifyForgotPasswordResponse, error)
	ResetPassword(ctx context.Context, in *ResetPasswordRequest, opts ...grpc.CallOption) (*ResetPasswordResponse, error)
	ChangePassword(ctx context.Context, in *ChangePasswordRequest, opts ...grpc.CallOption) (*ChangePasswordResponse, error)
	CreatePatientClinicianMapping(ctx context.Context, in *CreatePatientClinicianMappingRequest, opts ...grpc.CallOption) (*CreatePatientClinicianMappingResponse, error)
	VerifyInvitation(ctx context.Context, in *VerifyInvitationRequest, opts ...grpc.CallOption) (*VerifyInvitationResponse, error)
}

type authenticationServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAuthenticationServiceClient(cc grpc.ClientConnInterface) AuthenticationServiceClient {
	return &authenticationServiceClient{cc}
}

func (c *authenticationServiceClient) CreateUser(ctx context.Context, in *CreateUserRequest, opts ...grpc.CallOption) (*CreateUserResponse, error) {
	out := new(CreateUserResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_CreateUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) GetUser(ctx context.Context, in *GetUserRequest, opts ...grpc.CallOption) (*GetUserResponse, error) {
	out := new(GetUserResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_GetUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) GetProfile(ctx context.Context, in *GetUserRequest, opts ...grpc.CallOption) (*GetUserResponse, error) {
	out := new(GetUserResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_GetProfile_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) RenewAccess(ctx context.Context, in *RenewAccessRequest, opts ...grpc.CallOption) (*RenewAccessResponse, error) {
	out := new(RenewAccessResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_RenewAccess_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) AuthStatus(ctx context.Context, in *AuthStatusRequest, opts ...grpc.CallOption) (*AuthStatusResponse, error) {
	out := new(AuthStatusResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_AuthStatus_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) UpdateUser(ctx context.Context, in *UpdateUserRequest, opts ...grpc.CallOption) (*UpdateUserResponse, error) {
	out := new(UpdateUserResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_UpdateUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) CreateClinician(ctx context.Context, in *CreateClinicianRequest, opts ...grpc.CallOption) (*CreateClinicianResponse, error) {
	out := new(CreateClinicianResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_CreateClinician_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) GetClinician(ctx context.Context, in *GetClinicianRequest, opts ...grpc.CallOption) (*GetClinicianResponse, error) {
	out := new(GetClinicianResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_GetClinician_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) UpdateClinician(ctx context.Context, in *UpdateClinicianRequest, opts ...grpc.CallOption) (*UpdateClinicianResponse, error) {
	out := new(UpdateClinicianResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_UpdateClinician_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) CreatePatient(ctx context.Context, in *CreatePatientRequest, opts ...grpc.CallOption) (*CreatePatientResponse, error) {
	out := new(CreatePatientResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_CreatePatient_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) GetPatient(ctx context.Context, in *GetPatientRequest, opts ...grpc.CallOption) (*GetPatientResponse, error) {
	out := new(GetPatientResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_GetPatient_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) UpdatePatient(ctx context.Context, in *UpdatePatientRequest, opts ...grpc.CallOption) (*UpdatePatientResponse, error) {
	out := new(UpdatePatientResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_UpdatePatient_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) LoginUser(ctx context.Context, in *LoginUserRequest, opts ...grpc.CallOption) (*LoginUserResponse, error) {
	out := new(LoginUserResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_LoginUser_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) VerifyEmail(ctx context.Context, in *VerifyEmailRequest, opts ...grpc.CallOption) (*VerifyEmailResponse, error) {
	out := new(VerifyEmailResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_VerifyEmail_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) ForgotPassword(ctx context.Context, in *ForgotPasswordRequest, opts ...grpc.CallOption) (*ForgotPasswordResponse, error) {
	out := new(ForgotPasswordResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_ForgotPassword_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) VerifyForgotPassword(ctx context.Context, in *VerifyForgotPasswordRequest, opts ...grpc.CallOption) (*VerifyForgotPasswordResponse, error) {
	out := new(VerifyForgotPasswordResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_VerifyForgotPassword_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) ResetPassword(ctx context.Context, in *ResetPasswordRequest, opts ...grpc.CallOption) (*ResetPasswordResponse, error) {
	out := new(ResetPasswordResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_ResetPassword_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) ChangePassword(ctx context.Context, in *ChangePasswordRequest, opts ...grpc.CallOption) (*ChangePasswordResponse, error) {
	out := new(ChangePasswordResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_ChangePassword_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) CreatePatientClinicianMapping(ctx context.Context, in *CreatePatientClinicianMappingRequest, opts ...grpc.CallOption) (*CreatePatientClinicianMappingResponse, error) {
	out := new(CreatePatientClinicianMappingResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_CreatePatientClinicianMapping_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authenticationServiceClient) VerifyInvitation(ctx context.Context, in *VerifyInvitationRequest, opts ...grpc.CallOption) (*VerifyInvitationResponse, error) {
	out := new(VerifyInvitationResponse)
	err := c.cc.Invoke(ctx, AuthenticationService_VerifyInvitation_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthenticationServiceServer is the server API for AuthenticationService service.
// All implementations must embed UnimplementedAuthenticationServiceServer
// for forward compatibility
type AuthenticationServiceServer interface {
	CreateUser(context.Context, *CreateUserRequest) (*CreateUserResponse, error)
	GetUser(context.Context, *GetUserRequest) (*GetUserResponse, error)
	GetProfile(context.Context, *GetUserRequest) (*GetUserResponse, error)
	RenewAccess(context.Context, *RenewAccessRequest) (*RenewAccessResponse, error)
	AuthStatus(context.Context, *AuthStatusRequest) (*AuthStatusResponse, error)
	UpdateUser(context.Context, *UpdateUserRequest) (*UpdateUserResponse, error)
	CreateClinician(context.Context, *CreateClinicianRequest) (*CreateClinicianResponse, error)
	GetClinician(context.Context, *GetClinicianRequest) (*GetClinicianResponse, error)
	UpdateClinician(context.Context, *UpdateClinicianRequest) (*UpdateClinicianResponse, error)
	CreatePatient(context.Context, *CreatePatientRequest) (*CreatePatientResponse, error)
	GetPatient(context.Context, *GetPatientRequest) (*GetPatientResponse, error)
	UpdatePatient(context.Context, *UpdatePatientRequest) (*UpdatePatientResponse, error)
	LoginUser(context.Context, *LoginUserRequest) (*LoginUserResponse, error)
	VerifyEmail(context.Context, *VerifyEmailRequest) (*VerifyEmailResponse, error)
	ForgotPassword(context.Context, *ForgotPasswordRequest) (*ForgotPasswordResponse, error)
	VerifyForgotPassword(context.Context, *VerifyForgotPasswordRequest) (*VerifyForgotPasswordResponse, error)
	ResetPassword(context.Context, *ResetPasswordRequest) (*ResetPasswordResponse, error)
	ChangePassword(context.Context, *ChangePasswordRequest) (*ChangePasswordResponse, error)
	CreatePatientClinicianMapping(context.Context, *CreatePatientClinicianMappingRequest) (*CreatePatientClinicianMappingResponse, error)
	VerifyInvitation(context.Context, *VerifyInvitationRequest) (*VerifyInvitationResponse, error)
	mustEmbedUnimplementedAuthenticationServiceServer()
}

// UnimplementedAuthenticationServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAuthenticationServiceServer struct {
}

func (UnimplementedAuthenticationServiceServer) CreateUser(context.Context, *CreateUserRequest) (*CreateUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateUser not implemented")
}
func (UnimplementedAuthenticationServiceServer) GetUser(context.Context, *GetUserRequest) (*GetUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUser not implemented")
}
func (UnimplementedAuthenticationServiceServer) GetProfile(context.Context, *GetUserRequest) (*GetUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetProfile not implemented")
}
func (UnimplementedAuthenticationServiceServer) RenewAccess(context.Context, *RenewAccessRequest) (*RenewAccessResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RenewAccess not implemented")
}
func (UnimplementedAuthenticationServiceServer) AuthStatus(context.Context, *AuthStatusRequest) (*AuthStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AuthStatus not implemented")
}
func (UnimplementedAuthenticationServiceServer) UpdateUser(context.Context, *UpdateUserRequest) (*UpdateUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateUser not implemented")
}
func (UnimplementedAuthenticationServiceServer) CreateClinician(context.Context, *CreateClinicianRequest) (*CreateClinicianResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateClinician not implemented")
}
func (UnimplementedAuthenticationServiceServer) GetClinician(context.Context, *GetClinicianRequest) (*GetClinicianResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetClinician not implemented")
}
func (UnimplementedAuthenticationServiceServer) UpdateClinician(context.Context, *UpdateClinicianRequest) (*UpdateClinicianResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateClinician not implemented")
}
func (UnimplementedAuthenticationServiceServer) CreatePatient(context.Context, *CreatePatientRequest) (*CreatePatientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePatient not implemented")
}
func (UnimplementedAuthenticationServiceServer) GetPatient(context.Context, *GetPatientRequest) (*GetPatientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetPatient not implemented")
}
func (UnimplementedAuthenticationServiceServer) UpdatePatient(context.Context, *UpdatePatientRequest) (*UpdatePatientResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdatePatient not implemented")
}
func (UnimplementedAuthenticationServiceServer) LoginUser(context.Context, *LoginUserRequest) (*LoginUserResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LoginUser not implemented")
}
func (UnimplementedAuthenticationServiceServer) VerifyEmail(context.Context, *VerifyEmailRequest) (*VerifyEmailResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method VerifyEmail not implemented")
}
func (UnimplementedAuthenticationServiceServer) ForgotPassword(context.Context, *ForgotPasswordRequest) (*ForgotPasswordResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ForgotPassword not implemented")
}
func (UnimplementedAuthenticationServiceServer) VerifyForgotPassword(context.Context, *VerifyForgotPasswordRequest) (*VerifyForgotPasswordResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method VerifyForgotPassword not implemented")
}
func (UnimplementedAuthenticationServiceServer) ResetPassword(context.Context, *ResetPasswordRequest) (*ResetPasswordResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ResetPassword not implemented")
}
func (UnimplementedAuthenticationServiceServer) ChangePassword(context.Context, *ChangePasswordRequest) (*ChangePasswordResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ChangePassword not implemented")
}
func (UnimplementedAuthenticationServiceServer) CreatePatientClinicianMapping(context.Context, *CreatePatientClinicianMappingRequest) (*CreatePatientClinicianMappingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePatientClinicianMapping not implemented")
}
func (UnimplementedAuthenticationServiceServer) VerifyInvitation(context.Context, *VerifyInvitationRequest) (*VerifyInvitationResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method VerifyInvitation not implemented")
}
func (UnimplementedAuthenticationServiceServer) mustEmbedUnimplementedAuthenticationServiceServer() {}

// UnsafeAuthenticationServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AuthenticationServiceServer will
// result in compilation errors.
type UnsafeAuthenticationServiceServer interface {
	mustEmbedUnimplementedAuthenticationServiceServer()
}

func RegisterAuthenticationServiceServer(s grpc.ServiceRegistrar, srv AuthenticationServiceServer) {
	s.RegisterService(&AuthenticationService_ServiceDesc, srv)
}

func _AuthenticationService_CreateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).CreateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_CreateUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).CreateUser(ctx, req.(*CreateUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_GetUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).GetUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_GetUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).GetUser(ctx, req.(*GetUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_GetProfile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).GetProfile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_GetProfile_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).GetProfile(ctx, req.(*GetUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_RenewAccess_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RenewAccessRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).RenewAccess(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_RenewAccess_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).RenewAccess(ctx, req.(*RenewAccessRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_AuthStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AuthStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).AuthStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_AuthStatus_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).AuthStatus(ctx, req.(*AuthStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_UpdateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).UpdateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_UpdateUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).UpdateUser(ctx, req.(*UpdateUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_CreateClinician_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateClinicianRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).CreateClinician(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_CreateClinician_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).CreateClinician(ctx, req.(*CreateClinicianRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_GetClinician_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetClinicianRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).GetClinician(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_GetClinician_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).GetClinician(ctx, req.(*GetClinicianRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_UpdateClinician_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateClinicianRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).UpdateClinician(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_UpdateClinician_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).UpdateClinician(ctx, req.(*UpdateClinicianRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_CreatePatient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreatePatientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).CreatePatient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_CreatePatient_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).CreatePatient(ctx, req.(*CreatePatientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_GetPatient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetPatientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).GetPatient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_GetPatient_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).GetPatient(ctx, req.(*GetPatientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_UpdatePatient_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdatePatientRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).UpdatePatient(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_UpdatePatient_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).UpdatePatient(ctx, req.(*UpdatePatientRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_LoginUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LoginUserRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).LoginUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_LoginUser_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).LoginUser(ctx, req.(*LoginUserRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_VerifyEmail_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VerifyEmailRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).VerifyEmail(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_VerifyEmail_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).VerifyEmail(ctx, req.(*VerifyEmailRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_ForgotPassword_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ForgotPasswordRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).ForgotPassword(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_ForgotPassword_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).ForgotPassword(ctx, req.(*ForgotPasswordRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_VerifyForgotPassword_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VerifyForgotPasswordRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).VerifyForgotPassword(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_VerifyForgotPassword_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).VerifyForgotPassword(ctx, req.(*VerifyForgotPasswordRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_ResetPassword_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ResetPasswordRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).ResetPassword(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_ResetPassword_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).ResetPassword(ctx, req.(*ResetPasswordRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_ChangePassword_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ChangePasswordRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).ChangePassword(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_ChangePassword_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).ChangePassword(ctx, req.(*ChangePasswordRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_CreatePatientClinicianMapping_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreatePatientClinicianMappingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).CreatePatientClinicianMapping(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_CreatePatientClinicianMapping_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).CreatePatientClinicianMapping(ctx, req.(*CreatePatientClinicianMappingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthenticationService_VerifyInvitation_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VerifyInvitationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthenticationServiceServer).VerifyInvitation(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthenticationService_VerifyInvitation_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthenticationServiceServer).VerifyInvitation(ctx, req.(*VerifyInvitationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AuthenticationService_ServiceDesc is the grpc.ServiceDesc for AuthenticationService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AuthenticationService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "pb.AuthenticationService",
	HandlerType: (*AuthenticationServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateUser",
			Handler:    _AuthenticationService_CreateUser_Handler,
		},
		{
			MethodName: "GetUser",
			Handler:    _AuthenticationService_GetUser_Handler,
		},
		{
			MethodName: "GetProfile",
			Handler:    _AuthenticationService_GetProfile_Handler,
		},
		{
			MethodName: "RenewAccess",
			Handler:    _AuthenticationService_RenewAccess_Handler,
		},
		{
			MethodName: "AuthStatus",
			Handler:    _AuthenticationService_AuthStatus_Handler,
		},
		{
			MethodName: "UpdateUser",
			Handler:    _AuthenticationService_UpdateUser_Handler,
		},
		{
			MethodName: "CreateClinician",
			Handler:    _AuthenticationService_CreateClinician_Handler,
		},
		{
			MethodName: "GetClinician",
			Handler:    _AuthenticationService_GetClinician_Handler,
		},
		{
			MethodName: "UpdateClinician",
			Handler:    _AuthenticationService_UpdateClinician_Handler,
		},
		{
			MethodName: "CreatePatient",
			Handler:    _AuthenticationService_CreatePatient_Handler,
		},
		{
			MethodName: "GetPatient",
			Handler:    _AuthenticationService_GetPatient_Handler,
		},
		{
			MethodName: "UpdatePatient",
			Handler:    _AuthenticationService_UpdatePatient_Handler,
		},
		{
			MethodName: "LoginUser",
			Handler:    _AuthenticationService_LoginUser_Handler,
		},
		{
			MethodName: "VerifyEmail",
			Handler:    _AuthenticationService_VerifyEmail_Handler,
		},
		{
			MethodName: "ForgotPassword",
			Handler:    _AuthenticationService_ForgotPassword_Handler,
		},
		{
			MethodName: "VerifyForgotPassword",
			Handler:    _AuthenticationService_VerifyForgotPassword_Handler,
		},
		{
			MethodName: "ResetPassword",
			Handler:    _AuthenticationService_ResetPassword_Handler,
		},
		{
			MethodName: "ChangePassword",
			Handler:    _AuthenticationService_ChangePassword_Handler,
		},
		{
			MethodName: "CreatePatientClinicianMapping",
			Handler:    _AuthenticationService_CreatePatientClinicianMapping_Handler,
		},
		{
			MethodName: "VerifyInvitation",
			Handler:    _AuthenticationService_VerifyInvitation_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "service_authentication.proto",
}
