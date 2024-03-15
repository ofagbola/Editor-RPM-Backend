type questionType = "singleChoice" | "multipleChoice" | "numberScale" | "longAnswer" | "shortAnswer" | "existngQuestion";

interface User {
    id: string;
    action: "created" | "modified" | "deleted";
    date: Date;
}

export interface Question {
    id: string;
    question: string;
    answers: string[] | number[];
    type: questionType;
    category: string;
    users: User[];
    status: string;
    created_at: Date;
    updated_at: Date;
}
  
export interface Questionnaire {
    id: string;
    questions: string[]; 
    category: string;
    users: User[];
    status: string;
    created_at: Date;
    updated_at: Date;
}
  
export interface Answer {
    id: string;
    questionnnaire: string;
    question: string;
    answer: number[] | string[];
    user: string;
    status: string;
    created_at: Date;
    updated_at: Date;
}
  
export interface Categories {
    id: string;
    name: string;
    users: User[];
    status: string;
    created_at: Date;
    updated_at: Date;
}