import { getRandomInt, getTimestampDate } from "../utils/utils";

const ScheduleConstants = [
    {
        title: "Regular Plan",
        description: "Plan is for just brief medical reportings",
        schedule: {
            initiator: { id: "bjhfbdjhddhfviuefuieiuehfiuefer",  type: "PATIENT" },
            recepient: { id: "dugsigiegedy8deaidhauigdeaydgyd",  type: "DOCTOR" },
            duration: "30 Minutes",
            sessions: 3,
            package: ["MESSAGING", "QUESTIONNAIRE"],
            status: "PENDING",
            date: getTimestampDate({ date: null }),
        },
        reschedule: [
            {
                reason: "I missed the scheduled meeting due to some medical complications",
                schedule: {
                    initiator: { id: "bjhfbdjhddhfviuefuieiuehfiuefer",  type: "PATIENT" },
                    recepient: { id: "dugsigiegedy8deaidhauigdeaydgyd",  type: "DOCTOR" },
                    duration: "30 Minutes",
                    sessions: 3,
                    package: ["MESSAGING", "QUESTIONNAIRE"],
                    status: "PENDING",
                    date: getTimestampDate({ date: null }),
                },
            },
            {
                reason: "Was unavailable for session",
                schedule: {
                    initiator: { id: "dugsigiegedy8deaidhauigdeaydgyd",  type: "DOCTOR" },
                    recepient: { id: "bjhfbdjhddhfviuefuieiuehfiuefer",  type: "PATIENT" },
                    duration: "30 Minutes",
                    sessions: 2,
                    package: ["MESSAGING", "QUESTIONNAIRE"],
                    status: "PENDING",
                    date: getTimestampDate({ date: null }),
                },
            }
        ],
        userSubscriptionId: "950af31e-9b22-4a24-ae42-1b2b9f5c2d75"
    },
    {
        title: "Pro Plan",
        description: "Plan is for just brief detailed reportings",
        schedule: {
            initiator: { id: "bjhfbdjhddhfviuefuieiuehfiuefer",  type: "PATIENT" },
            recepient: { id: "dugsigiegedy8deaidhauigdeaydgyd",  type: "DOCTOR" },
            duration: "01 Hours",
            sessions: 6,
            package: ["MESSAGING", "QUESTIONNAIRE", "VOICE_CALL"],
            status: "PENDING",
            date: getTimestampDate({ date: null }),
        },
        reschedule: [
            {
                reason: "I missed the scheduled meeting due to some pro complications",
                schedule: {
                    initiator: { id: "bjhfbdjhddhfviuefuieiuehfiuefer",  type: "PATIENT" },
                    recepient: { id: "dugsigiegedy8deaidhauigdeaydgyd",  type: "DOCTOR" },
                    duration: "01 Hours",
                    sessions: 2,
                    package: ["MESSAGING", "QUESTIONNAIRE", "VOICE_CALL"],
                    status: "PENDING",
                    date: getTimestampDate({ date: null }),
                },
            },
            {
                reason: "Was unavailable for pro session",
                schedule: {
                    initiator: { id: "dugsigiegedy8deaidhauigdeaydgyd",  type: "DOCTOR" },
                    recepient: { id: "bjhfbdjhddhfviuefuieiuehfiuefer",  type: "PATIENT" },
                    duration: "01 Hours",
                    sessions: 1,
                    package: ["MESSAGING", "QUESTIONNAIRE", "VOICE_CALL"],
                    status: "PENDING",
                    date: getTimestampDate({ date: null }),
                },
            }
        ],
        userSubscriptionId: "950af31e-9b22-4a24-ae42-1b2b9f5c2d75"
    },
    {
        title: "VIP Plan",
        description: "Plan is for just brief special reportings",
        schedule: {
            initiator: { id: "dugsigiegedy8deaidhauigdeaydgyd",  type: "DOCTOR" },
            recepient: { id: "bjhfbdjhddhfviuefuieiuehfiuefer",  type: "PATIENT" },
            duration: "01 Hours, 30 Minutes",
            sessions: 10,
            package: ["MESSAGING", "QUESTIONNAIRE", "VIDEO_CALL", "VOICE_CALL"],
            status: "PENDING",
            date: getTimestampDate({ date: null }),
        },
        reschedule: [
            {
                reason: "I missed the scheduled meeting due to some vip complications",
                schedule: {
                    initiator: { id: "bjhfbdjhddhfviuefuieiuehfiuefer",  type: "PATIENT" },
                    recepient: { id: "dugsigiegedy8deaidhauigdeaydgyd",  type: "DOCTOR" },
                    duration: "01 Hours",
                    sessions: 2,
                    package: ["MESSAGING", "QUESTIONNAIRE", "VIDEO_CALL", "VOICE_CALL"],
                    status: "PENDING",
                    date: getTimestampDate({ date: null }),
                },
            },
            {
                reason: "Was unavailable for vip session",
                schedule: {
                    initiator: { id: "dugsigiegedy8deaidhauigdeaydgyd",  type: "DOCTOR" },
                    recepient: { id: "bjhfbdjhddhfviuefuieiuehfiuefer",  type: "PATIENT" },
                    duration: "01 Hours",
                    sessions: 1,
                    package: ["MESSAGING", "QUESTIONNAIRE", "VIDEO_CALL", "VOICE_CALL"],
                    status: "PENDING",
                    date: getTimestampDate({ date: null }),
                },
            }
        ],
        userSubscriptionId: "950af31e-9b22-4a24-ae42-1b2b9f5c2d75"
    },
]

const ScheduleConstantIDs: string[] = [
    "032d0403-3785-44f9-a2c3-d0a5f70ee4dc",
    "7a639e4a-362c-4fa7-bd54-e058e5bde50d"
]

const access_token = "ydu6reytduydydyhgftyfytftyrdrd";

export const GetScheduleConstants = () => {
    console.log({ Raw_Input: { access_token, request_query: { } } })

    return { access_token, request_query: {  } };
}

export const GetScheduleConstant = () => {
    const random = getRandomInt(0, ScheduleConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: ScheduleConstantIDs[random] } })

    return { access_token, id: ScheduleConstantIDs[random] };
}

export const CreateScheduleConstant = () => {
    const random = getRandomInt(0, ScheduleConstants.length - 1);

    console.log({ Raw_Input: {  access_token, ...ScheduleConstants[random] } })

    return { access_token, ...ScheduleConstants[random] };
}

export const CreateReScheduleConstant = () => {
    const random = getRandomInt(0, ScheduleConstants.length - 1);
    const reRand = getRandomInt(0, ScheduleConstants[random].reschedule.length - 1);
    const randId = getRandomInt(0, ScheduleConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: ScheduleConstantIDs[randId], ...ScheduleConstants[random].reschedule[reRand] } })

    return { access_token, id: ScheduleConstantIDs[randId], ...ScheduleConstants[random].reschedule[reRand] };
}

export const UpdateScheduleConstant = () => {
    const random = getRandomInt(0, ScheduleConstants.length - 1);
    const randId = getRandomInt(0, ScheduleConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: ScheduleConstantIDs[randId], ...ScheduleConstants[random] } })

    return { access_token, id: ScheduleConstantIDs[randId], ...ScheduleConstants[random] };
}

export const UpdateReScheduleConstant = () => {
    const random = getRandomInt(0, ScheduleConstants.length - 1);
    const reRand = getRandomInt(0, ScheduleConstants[random].reschedule.length - 1);
    const randId = getRandomInt(0, ScheduleConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: ScheduleConstantIDs[randId], index: reRand, ...ScheduleConstants[random].reschedule[reRand] } })

    return { access_token, id: ScheduleConstantIDs[randId], index: reRand, ...ScheduleConstants[random].reschedule[reRand] };
}

export const DeleteScheduleConstant = () => {
    const random = getRandomInt(0, ScheduleConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: ScheduleConstantIDs[random] } })

    return { access_token, id: ScheduleConstantIDs[random] };
}

export const DeleteReScheduleConstant = () => {
    const random = getRandomInt(0, ScheduleConstantIDs.length - 1);
    const reRand = getRandomInt(0, ScheduleConstants[random].reschedule.length - 1);

    console.log({ Raw_Input: { access_token, id: ScheduleConstantIDs[random], index: reRand } })

    return { access_token, id: ScheduleConstantIDs[random], index: reRand };
}