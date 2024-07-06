// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        v5.26.1
// source: rpc_get_clinician.proto

package pb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetClinicianRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Username string `protobuf:"bytes,1,opt,name=username,proto3" json:"username,omitempty"`
}

func (x *GetClinicianRequest) Reset() {
	*x = GetClinicianRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_get_clinician_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetClinicianRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetClinicianRequest) ProtoMessage() {}

func (x *GetClinicianRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_get_clinician_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetClinicianRequest.ProtoReflect.Descriptor instead.
func (*GetClinicianRequest) Descriptor() ([]byte, []int) {
	return file_rpc_get_clinician_proto_rawDescGZIP(), []int{0}
}

func (x *GetClinicianRequest) GetUsername() string {
	if x != nil {
		return x.Username
	}
	return ""
}

type GetClinicianResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Clinician *Clinician `protobuf:"bytes,1,opt,name=clinician,proto3" json:"clinician,omitempty"`
}

func (x *GetClinicianResponse) Reset() {
	*x = GetClinicianResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_get_clinician_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetClinicianResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetClinicianResponse) ProtoMessage() {}

func (x *GetClinicianResponse) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_get_clinician_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetClinicianResponse.ProtoReflect.Descriptor instead.
func (*GetClinicianResponse) Descriptor() ([]byte, []int) {
	return file_rpc_get_clinician_proto_rawDescGZIP(), []int{1}
}

func (x *GetClinicianResponse) GetClinician() *Clinician {
	if x != nil {
		return x.Clinician
	}
	return nil
}

var File_rpc_get_clinician_proto protoreflect.FileDescriptor

var file_rpc_get_clinician_proto_rawDesc = []byte{
	0x0a, 0x17, 0x72, 0x70, 0x63, 0x5f, 0x67, 0x65, 0x74, 0x5f, 0x63, 0x6c, 0x69, 0x6e, 0x69, 0x63,
	0x69, 0x61, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x02, 0x70, 0x62, 0x1a, 0x0f, 0x63,
	0x6c, 0x69, 0x6e, 0x69, 0x63, 0x69, 0x61, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x31,
	0x0a, 0x13, 0x47, 0x65, 0x74, 0x43, 0x6c, 0x69, 0x6e, 0x69, 0x63, 0x69, 0x61, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d,
	0x65, 0x22, 0x43, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x43, 0x6c, 0x69, 0x6e, 0x69, 0x63, 0x69, 0x61,
	0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2b, 0x0a, 0x09, 0x63, 0x6c, 0x69,
	0x6e, 0x69, 0x63, 0x69, 0x61, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0d, 0x2e, 0x70,
	0x62, 0x2e, 0x43, 0x6c, 0x69, 0x6e, 0x69, 0x63, 0x69, 0x61, 0x6e, 0x52, 0x09, 0x63, 0x6c, 0x69,
	0x6e, 0x69, 0x63, 0x69, 0x61, 0x6e, 0x42, 0x3a, 0x5a, 0x38, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x66, 0x61, 0x67, 0x62, 0x6f, 0x6c, 0x61, 0x2f, 0x45, 0x64,
	0x69, 0x74, 0x6f, 0x72, 0x2d, 0x52, 0x50, 0x4d, 0x2d, 0x42, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64,
	0x2f, 0x61, 0x75, 0x74, 0x68, 0x65, 0x6e, 0x74, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2f,
	0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_rpc_get_clinician_proto_rawDescOnce sync.Once
	file_rpc_get_clinician_proto_rawDescData = file_rpc_get_clinician_proto_rawDesc
)

func file_rpc_get_clinician_proto_rawDescGZIP() []byte {
	file_rpc_get_clinician_proto_rawDescOnce.Do(func() {
		file_rpc_get_clinician_proto_rawDescData = protoimpl.X.CompressGZIP(file_rpc_get_clinician_proto_rawDescData)
	})
	return file_rpc_get_clinician_proto_rawDescData
}

var file_rpc_get_clinician_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_rpc_get_clinician_proto_goTypes = []interface{}{
	(*GetClinicianRequest)(nil),  // 0: pb.GetClinicianRequest
	(*GetClinicianResponse)(nil), // 1: pb.GetClinicianResponse
	(*Clinician)(nil),            // 2: pb.Clinician
}
var file_rpc_get_clinician_proto_depIdxs = []int32{
	2, // 0: pb.GetClinicianResponse.clinician:type_name -> pb.Clinician
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_rpc_get_clinician_proto_init() }
func file_rpc_get_clinician_proto_init() {
	if File_rpc_get_clinician_proto != nil {
		return
	}
	file_clinician_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_rpc_get_clinician_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetClinicianRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_rpc_get_clinician_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetClinicianResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_rpc_get_clinician_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_rpc_get_clinician_proto_goTypes,
		DependencyIndexes: file_rpc_get_clinician_proto_depIdxs,
		MessageInfos:      file_rpc_get_clinician_proto_msgTypes,
	}.Build()
	File_rpc_get_clinician_proto = out.File
	file_rpc_get_clinician_proto_rawDesc = nil
	file_rpc_get_clinician_proto_goTypes = nil
	file_rpc_get_clinician_proto_depIdxs = nil
}
