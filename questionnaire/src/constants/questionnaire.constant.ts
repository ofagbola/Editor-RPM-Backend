import { getRandomInt } from "../utils/utils";

const QuestionnaireConstants = [
    {
        questions: [
            "e8db9a17-b91d-4880-9d36-383226ced55c",
            "3bc214b9-bc76-44d6-9ae9-deec58055179",
            "e544613c-889f-4de8-9a0a-9cce22e78dfa",
        ],
        category: "021f27e6-90f2-4ebe-879b-8e3a9051d784",
        status: "active"
    },
    {
        questions: [
            "e8db9a17-b91d-4880-9d36-383226ced55c",
            "3bc214b9-bc76-44d6-9ae9-deec58055179",
            "e544613c-889f-4de8-9a0a-9cce22e78dfa",
        ],
        category: "021f27e6-90f2-4ebe-879b-8e3a9051d784",
        status: "active"
    },
    {
        questions: [
            "3bc214b9-bc76-44d6-9ae9-deec58055179",
            "e544613c-889f-4de8-9a0a-9cce22e78dfa",
            "4b9dc84d-0e1c-410f-9be3-8ac1aa1d7c60"
        ],
        category: "a5b10cc5-2c37-48aa-a815-86d97200f369",
        status: "active"
    }
]

const QuestionnaireConstantIDs: string[] = [
    "692e4d2f-b7c9-49b2-8eba-5fde09a8f4d3",
    "67743af6-42a5-4477-8ac5-aa6786e2cb12"
]

const access_token = "sgcfusygdusygdfusyfbsuegfusfe";

export const GetQuestionnaireConstants = () => {
    console.log({ Raw_Input: { access_token, request_query: { status: "active" } } })

    return { access_token, request_query: { status: "active" } };
}

export const GetQuestionnaireConstant = () => {
    const random = getRandomInt(0, QuestionnaireConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: QuestionnaireConstantIDs[random] } })

    return { access_token, id: QuestionnaireConstantIDs[random] };
}

export const CreateQuestionnaireConstant = () => {
    const random = getRandomInt(0, QuestionnaireConstants.length - 1);

    console.log({ Raw_Input: {  access_token, ...QuestionnaireConstants[random] } })

    return { access_token, ...QuestionnaireConstants[random] };
}

export const UpdateQuestionnaireConstant = () => {
    const random = getRandomInt(0, QuestionnaireConstants.length - 1);
    const randomId = getRandomInt(0, QuestionnaireConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: QuestionnaireConstantIDs[randomId], ...QuestionnaireConstants[random] } })

    return { access_token, id: QuestionnaireConstantIDs[randomId], ...QuestionnaireConstants[random] };
}

export const DeleteQuestionnaireConstant = () => {
    const random = getRandomInt(0, QuestionnaireConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: QuestionnaireConstantIDs[random] } })

    return { access_token, id: QuestionnaireConstantIDs[random] };
}