// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.32.0
// 	protoc        v4.25.0
// source: rpc_create_question_config.proto

package pb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CreateQuestionConfigRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code        string   `protobuf:"bytes,1,opt,name=code,proto3" json:"code,omitempty"`
	Title       string   `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	Description string   `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	Questions   []string `protobuf:"bytes,4,rep,name=questions,proto3" json:"questions,omitempty"`
	CreatedBy   string   `protobuf:"bytes,5,opt,name=created_by,json=createdBy,proto3" json:"created_by,omitempty"`
}

func (x *CreateQuestionConfigRequest) Reset() {
	*x = CreateQuestionConfigRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_create_question_config_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateQuestionConfigRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateQuestionConfigRequest) ProtoMessage() {}

func (x *CreateQuestionConfigRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_create_question_config_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateQuestionConfigRequest.ProtoReflect.Descriptor instead.
func (*CreateQuestionConfigRequest) Descriptor() ([]byte, []int) {
	return file_rpc_create_question_config_proto_rawDescGZIP(), []int{0}
}

func (x *CreateQuestionConfigRequest) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

func (x *CreateQuestionConfigRequest) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *CreateQuestionConfigRequest) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *CreateQuestionConfigRequest) GetQuestions() []string {
	if x != nil {
		return x.Questions
	}
	return nil
}

func (x *CreateQuestionConfigRequest) GetCreatedBy() string {
	if x != nil {
		return x.CreatedBy
	}
	return ""
}

type CreateQuestionConfigResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	QuestionConfig *QuestionConfig `protobuf:"bytes,1,opt,name=question_config,json=questionConfig,proto3" json:"question_config,omitempty"`
}

func (x *CreateQuestionConfigResponse) Reset() {
	*x = CreateQuestionConfigResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_create_question_config_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateQuestionConfigResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateQuestionConfigResponse) ProtoMessage() {}

func (x *CreateQuestionConfigResponse) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_create_question_config_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateQuestionConfigResponse.ProtoReflect.Descriptor instead.
func (*CreateQuestionConfigResponse) Descriptor() ([]byte, []int) {
	return file_rpc_create_question_config_proto_rawDescGZIP(), []int{1}
}

func (x *CreateQuestionConfigResponse) GetQuestionConfig() *QuestionConfig {
	if x != nil {
		return x.QuestionConfig
	}
	return nil
}

type QuestionConfig struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          int32                  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Code        string                 `protobuf:"bytes,2,opt,name=code,proto3" json:"code,omitempty"`
	Title       string                 `protobuf:"bytes,3,opt,name=title,proto3" json:"title,omitempty"`
	Description string                 `protobuf:"bytes,4,opt,name=description,proto3" json:"description,omitempty"`
	Questions   []string               `protobuf:"bytes,5,rep,name=questions,proto3" json:"questions,omitempty"`
	CreatedBy   string                 `protobuf:"bytes,6,opt,name=created_by,json=createdBy,proto3" json:"created_by,omitempty"`
	CreatedAt   *timestamppb.Timestamp `protobuf:"bytes,7,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
}

func (x *QuestionConfig) Reset() {
	*x = QuestionConfig{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_create_question_config_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QuestionConfig) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QuestionConfig) ProtoMessage() {}

func (x *QuestionConfig) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_create_question_config_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QuestionConfig.ProtoReflect.Descriptor instead.
func (*QuestionConfig) Descriptor() ([]byte, []int) {
	return file_rpc_create_question_config_proto_rawDescGZIP(), []int{2}
}

func (x *QuestionConfig) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *QuestionConfig) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

func (x *QuestionConfig) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *QuestionConfig) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *QuestionConfig) GetQuestions() []string {
	if x != nil {
		return x.Questions
	}
	return nil
}

func (x *QuestionConfig) GetCreatedBy() string {
	if x != nil {
		return x.CreatedBy
	}
	return ""
}

func (x *QuestionConfig) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

var File_rpc_create_question_config_proto protoreflect.FileDescriptor

var file_rpc_create_question_config_proto_rawDesc = []byte{
	0x0a, 0x20, 0x72, 0x70, 0x63, 0x5f, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x02, 0x70, 0x62, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa6, 0x01, 0x0a, 0x1b, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x51, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74,
	0x69, 0x74, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c,
	0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74,
	0x69, 0x6f, 0x6e, 0x12, 0x1c, 0x0a, 0x09, 0x71, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x18, 0x04, 0x20, 0x03, 0x28, 0x09, 0x52, 0x09, 0x71, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62, 0x79, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79,
	0x22, 0x5b, 0x0a, 0x1c, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x51, 0x75, 0x65, 0x73, 0x74, 0x69,
	0x6f, 0x6e, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x3b, 0x0a, 0x0f, 0x71, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x63, 0x6f, 0x6e,
	0x66, 0x69, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x70, 0x62, 0x2e, 0x51,
	0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x52, 0x0e, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x22, 0xe4, 0x01,
	0x0a, 0x0e, 0x51, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64,
	0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x63, 0x6f, 0x64, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65,
	0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1c, 0x0a, 0x09,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x09, 0x52,
	0x09, 0x71, 0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x62, 0x79, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09,
	0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x42, 0x79, 0x12, 0x39, 0x0a, 0x0a, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x41, 0x74, 0x42, 0x39, 0x5a, 0x37, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x6f, 0x66, 0x61, 0x67, 0x62, 0x6f, 0x6c, 0x61, 0x2f, 0x45, 0x64, 0x69, 0x74,
	0x6f, 0x72, 0x2d, 0x52, 0x50, 0x4d, 0x2d, 0x42, 0x61, 0x63, 0x6b, 0x65, 0x6e, 0x64, 0x2f, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x69, 0x6f, 0x6e, 0x6e, 0x61, 0x69, 0x72, 0x65, 0x2f, 0x70, 0x62, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_rpc_create_question_config_proto_rawDescOnce sync.Once
	file_rpc_create_question_config_proto_rawDescData = file_rpc_create_question_config_proto_rawDesc
)

func file_rpc_create_question_config_proto_rawDescGZIP() []byte {
	file_rpc_create_question_config_proto_rawDescOnce.Do(func() {
		file_rpc_create_question_config_proto_rawDescData = protoimpl.X.CompressGZIP(file_rpc_create_question_config_proto_rawDescData)
	})
	return file_rpc_create_question_config_proto_rawDescData
}

var file_rpc_create_question_config_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_rpc_create_question_config_proto_goTypes = []interface{}{
	(*CreateQuestionConfigRequest)(nil),  // 0: pb.CreateQuestionConfigRequest
	(*CreateQuestionConfigResponse)(nil), // 1: pb.CreateQuestionConfigResponse
	(*QuestionConfig)(nil),               // 2: pb.QuestionConfig
	(*timestamppb.Timestamp)(nil),        // 3: google.protobuf.Timestamp
}
var file_rpc_create_question_config_proto_depIdxs = []int32{
	2, // 0: pb.CreateQuestionConfigResponse.question_config:type_name -> pb.QuestionConfig
	3, // 1: pb.QuestionConfig.created_at:type_name -> google.protobuf.Timestamp
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_rpc_create_question_config_proto_init() }
func file_rpc_create_question_config_proto_init() {
	if File_rpc_create_question_config_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_rpc_create_question_config_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateQuestionConfigRequest); i {
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
		file_rpc_create_question_config_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateQuestionConfigResponse); i {
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
		file_rpc_create_question_config_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QuestionConfig); i {
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
			RawDescriptor: file_rpc_create_question_config_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_rpc_create_question_config_proto_goTypes,
		DependencyIndexes: file_rpc_create_question_config_proto_depIdxs,
		MessageInfos:      file_rpc_create_question_config_proto_msgTypes,
	}.Build()
	File_rpc_create_question_config_proto = out.File
	file_rpc_create_question_config_proto_rawDesc = nil
	file_rpc_create_question_config_proto_goTypes = nil
	file_rpc_create_question_config_proto_depIdxs = nil
}
