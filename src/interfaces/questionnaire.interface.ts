type questionType = "singleChoice" | "multipleChoice" | "numberScale" | "longAnswer" | "shortAnswer" | "existngQuestion";

export interface OuestionnaireRequest {
    id: string;
    question: string;
    name: string;
    description: string;
    answers: string[] | number[];
    questionCode: string;
    questionType: questionType;
    status: string;
    created_at: Date;
    updated_at: Date;
}

export interface AnswerRequest {
    id: string;
    questionId: string;
    answers: string[] | number[];
    answerType: questionType;
    userId: string;
    status: string;
    created_at: Date;
    updated_at: Date;
}