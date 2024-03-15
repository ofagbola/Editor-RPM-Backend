import { getRandomInt } from "../utils/utils";

const QuestionConstants = [
    {
        question: "Do you feel headaches?",
        answers: ["Yes", "No"],
        type: "singleChoice",
        category: "a5b10cc5-2c37-48aa-a815-86d97200f369",
        status: "active"
    },
    {
        question: "Is vomiting a part of your symtoms?",
        answers: ["Yes", "No"],
        type: "singleChoice",
        category: "a5b10cc5-2c37-48aa-a815-86d97200f369",
        status: "active"
    },
    {
        question: "On a scale of 1 to 10 select how weak you are?",
        answers: ["1", "10"],
        type: "numberScale",
        category: "a5b10cc5-2c37-48aa-a815-86d97200f369",
        status: "active"
    },
    {
        question: "Select all that is applicable to your symptoms?",
        answers: ["Vomitting", "Headaches", "Weakness", "Stooling", "Chest Pain"],
        type: "multipleChoice",
        category: "a5b10cc5-2c37-48aa-a815-86d97200f369",
        status: "active"
    },
    {
        question: "Describe when this started?",
        answers: ["____"],
        type: "singleChoice",
        category: "a5b10cc5-2c37-48aa-a815-86d97200f369",
        status: "active"
    }
]

const QuestionConstantIDs: string[] = [
    "e8db9a17-b91d-4880-9d36-383226ced55c",
    "3bc214b9-bc76-44d6-9ae9-deec58055179",
    "e544613c-889f-4de8-9a0a-9cce22e78dfa",
    "4b9dc84d-0e1c-410f-9be3-8ac1aa1d7c60"
]

const access_token = "gyugauydaawdiugidbaiuwgdawduyagd";

export const GetQuestionConstants = () => {
    console.log({ Raw_Input: { access_token, request_query: { status: "active" } } })

    return { access_token, request_query: { status: "active" } };
}

export const GetQuestionConstant = () => {
    const random = getRandomInt(0, QuestionConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: QuestionConstantIDs[random] } })

    return { access_token, id: QuestionConstantIDs[random] };
}

export const CreateQuestionConstant = () => {
    const random = getRandomInt(0, QuestionConstants.length - 1);

    console.log({ Raw_Input: {  access_token, ...QuestionConstants[random] } })

    return { access_token, ...QuestionConstants[random] };
}

export const UpdateQuestionConstant = () => {
    const random = getRandomInt(0, QuestionConstants.length - 1);

    console.log({ Raw_Input: { access_token, id: QuestionConstantIDs[random], ...QuestionConstants[random] } })

    return { access_token, id: QuestionConstantIDs[random], ...QuestionConstants[random] };
}

export const DeleteQuestionConstant = () => {
    const random = getRandomInt(0, QuestionConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: QuestionConstantIDs[random] } })

    return { access_token, id: QuestionConstantIDs[random] };
}