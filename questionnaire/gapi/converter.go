package gapi

import (
	db "github.com/ofagbola/Editor-RPM-Backend/questionnaire/db/sqlc"
	"github.com/ofagbola/Editor-RPM-Backend/questionnaire/pb"

	"google.golang.org/protobuf/types/known/timestamppb"
)

func convertQuestion(question db.Question) *pb.Question {
	return &pb.Question{
		Title:      question.Title,
		InputField: question.InputField,
		Options:    question.Options,
		CreatedBy:  question.CreatedBy,
		CreatedAt:  timestamppb.New(question.CreatedAt),
	}
}

func convertQuestionConfig(question_config db.QuestionConfig) *pb.QuestionConfig {
	return &pb.QuestionConfig{
		Title:       question_config.Title,
		Description: question_config.Description,
		Questions:   question_config.Questions,
		CreatedBy:   question_config.CreatedBy,
		CreatedAt:   timestamppb.New(question_config.CreatedAt),
	}
}
