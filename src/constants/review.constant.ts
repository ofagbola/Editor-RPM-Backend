import { getRandomInt } from "../utils/utils";

const ReviewConstants = [
    {
        sessionId: "032d0403-3785-44f9-a2c3-d0a5f70ee4dc",
        doctorId: "gayudguydhjadjawdoijwdwokdkjow",
        rating: 4,
        review: "It was a really good session, but I just needed more time."
    },
    {
        sessionId: "032d0403-3785-44f9-a2c3-d0a5f70ee4dc",
        doctorId: "gayudguydhjadjawdoijwdwokdkjow",
        rating: 1,
        review: "It was a really bad session, I didn't get enough time."
    },
    {
        sessionId: "032d0403-3785-44f9-a2c3-d0a5f70ee4dc",
        doctorId: "gayudguydhjadjawdoijwdwokdkjow",
        rating: 5,
        review: "It was really great, learnt alot from doctor matthew."
    },
]

const ReviewConstantIDs: string[] = [
    "2164576b-4885-42b3-82cf-2309abbb157b",
    "e93af724-2b0d-4b23-80f4-ffc51565cba1"
]

const access_token = "yfytftfuyfuitdudyrdsyrfut";

export const GetDoctorReviewConstants = () => {
    console.log({ Raw_Input: { access_token, doctorId: "gayudguydhjadjawdoijwdwokdkjow", request_query: {  } } })

    return { access_token, doctorId: "gayudguydhjadjawdoijwdwokdkjow", request_query: {  } }
}

export const GetSessionReviewConstants = () => {
    const random = getRandomInt(0, ReviewConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, sessionId: "032d0403-3785-44f9-a2c3-d0a5f70ee4dc", request_query: {  } } })

    return { access_token, sessionId: "032d0403-3785-44f9-a2c3-d0a5f70ee4dc", request_query: {  } };
}

export const CreateReviewConstant = () => {
    const random = getRandomInt(0, ReviewConstants.length - 1);

    console.log({ Raw_Input: { access_token, ...ReviewConstants[random] } })

    return { access_token, ...ReviewConstants[random] };
}

export const UpdateReviewConstant = () => {
    const random = getRandomInt(0, ReviewConstants.length - 1);
    const ranId = getRandomInt(0, ReviewConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: ReviewConstantIDs[ranId], ...ReviewConstants[random] } })

    return { access_token, id: ReviewConstantIDs[ranId], ...ReviewConstants[random] };
}

export const DeleteReviewConstant = () => {
    const random = getRandomInt(0, ReviewConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: ReviewConstantIDs[random] } })

    return { access_token, id: ReviewConstantIDs[random] };
}