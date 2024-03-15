import { getRandomInt } from "../utils/utils";

const AnswerConstants = [
    {
        questionnaire: "692e4d2f-b7c9-49b2-8eba-5fde09a8f4d3",
        answer: ["1"],
        question: "e8db9a17-b91d-4880-9d36-383226ced55c",
        status: "active"
    },
    {
        questionnaire: "692e4d2f-b7c9-49b2-8eba-5fde09a8f4d3",
        answer: ["4", "9"],
        question: "3bc214b9-bc76-44d6-9ae9-deec58055179",
        status: "active"
    },
    {
        questionnaire: "692e4d2f-b7c9-49b2-8eba-5fde09a8f4d3",
        answer: ["0"],
        question: "e544613c-889f-4de8-9a0a-9cce22e78dfa",
        status: "active"
    },
]

const AnswerConstantIDs: string[] = [
    "62c1fe4e-b5a0-4642-b170-1315eae0e455",
    "02721c36-47b9-43bc-81de-17b2964a14c0",
    "ed61c480-fef1-442c-b2f7-656d96716d7b",
    "b70f215f-8d1e-4c2e-97fa-91da1296e5d3"
]

const access_token = "gyugauydaawdiugidbaiuwgdawduyagd";

export const GetAnswerConstants = () => {
    console.log({ Raw_Input: { access_token, request_query: { status: "active" } } })

    return { access_token, request_query: { status: "active" } }
}

export const GetAnswerConstant = () => {
    const random = getRandomInt(0, AnswerConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, request_query: { status: "active" } }, id: AnswerConstantIDs[random], })

    return { access_token, request_query: { status: "active" }, id: AnswerConstantIDs[random], };
}

export const CreateAnswerConstant = () => {
    const random = getRandomInt(0, AnswerConstants.length - 1);

    console.log({ Raw_Input: { access_token, ...AnswerConstants[random] } })

    return { access_token, ...AnswerConstants[random] };
}

export const UpdateAnswerConstant = () => {
    const random = getRandomInt(0, AnswerConstants.length - 1);
    const randomId = getRandomInt(0, AnswerConstants.length - 1);

    console.log({ Raw_Input: { access_token, id: AnswerConstantIDs[randomId], ...AnswerConstants[random] } })

    return { access_token, id: AnswerConstantIDs[randomId], ...AnswerConstants[random] };
}

export const DeleteAnswerConstant = () => {
    const random = getRandomInt(0, AnswerConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: AnswerConstantIDs[random] } })

    return { access_token, id: AnswerConstantIDs[random] };
}