package gapi

import (
	db "github.com/ofagbola/Editor-RPM-Backend/questionnaire/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/questionnaire/pb"

	"google.golang.org/protobuf/types/known/timestamppb"
)

func convertQuestion(question db.Question) *pb.Question {
	return &pb.Question{
		Code:       question.Code,
		Title:      question.Title,
		InputField: question.InputField,
		Options:    question.Options,
		CreatedBy:  question.CreatedBy,
		CreatedAt:  timestamppb.New(question.CreatedAt),
	}
}

func convertQuestionConfig(question_config db.QuestionConfig) *pb.QuestionConfig {
	return &pb.QuestionConfig{
		Code:        question_config.Code,
		Title:       question_config.Title,
		Description: question_config.Description,
		Questions:   question_config.Questions,
		CreatedBy:   question_config.CreatedBy,
		CreatedAt:   timestamppb.New(question_config.CreatedAt),
	}
}

func convertSendQuestionConfig(send_question_config db.SendQuestionConfig) *pb.SendQuestionConfig {
	return &pb.SendQuestionConfig{
		QuestionConfigId: int64(send_question_config.QuestionConfigID),
		Recipient:        send_question_config.Recipient,
		Sender:           send_question_config.Sender,
		CreatedAt:        timestamppb.New(send_question_config.CreatedAt),
	}
}

func convertResponseQuestionConfig(response_question_config db.ResponseQuestionConfig) *pb.ResponseQuestionConfig {
	return &pb.ResponseQuestionConfig{
		QuestionConfigId: int64(response_question_config.QuestionConfigID),
		Patient:          response_question_config.Patient,
		Response:         response_question_config.Response,
		CreatedAt:        timestamppb.New(response_question_config.CreatedAt),
	}
}
