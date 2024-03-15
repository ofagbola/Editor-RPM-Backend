import { getRandomInt } from "../utils/utils";

const SubscriptionConstants = [
    {
        name: "Normal Plan",
        amount: 15000.00,
        currency: "NGN",
        discount: 10.00,
        billing: ["MONTHLY", "WEEKLY", "YEARLY"],
        paymentMethod: ["PAYPAL", "STRIPE", "VENMO"],
        benefits: [
            { available: true, description: "Messaging" },
            { available: true, description: "Questionnnaire" },
            { available: false, description: "Voice Call" },
            { available: false, description: "Video Call" },
            { available: true, description: "3 Sessions" },
            { available: false, description: "6 Sessions" },
            { available: false, description: "9 Sessions Plus an Extra Session" },
        ],
        extras: {
            duration: 30,
            session: 3,
            packages: ["MESSAGING", "QUESTIONNAIRE"]
        },
        status: "active"
    },
    {
        name: "PRO Plan",
        amount: 20000.00,
        currency: "NGN",
        discount: 15.00,
        billing: ["MONTHLY", "WEEKLY", "YEARLY"],
        paymentMethod: ["PAYPAL", "STRIPE", "VENMO"],
        benefits: [
            { available: true, description: "Messaging" },
            { available: true, description: "Questionnnaire" },
            { available: true, description: "Voice Call" },
            { available: false, description: "Video Call" },
            { available: true, description: "3 Sessions" },
            { available: true, description: "6 Sessions" },
            { available: false, description: "9 Sessions Plus an Extra Session" },
        ],
        extras: {
            duration: 60,
            session: 6,
            packages: ["MESSAGING", "VOICE_CALL", "QUESTIONNAIRE"]
        }
    },
    {
        name: "VIP Plan",
        amount: 10000.00,
        currency: "NGN",
        discount: 10.00,
        billing: ["MONTHLY", "WEEKLY", "YEARLY"],
        paymentMethod: ["PAYPAL", "STRIPE", "VENMO"],
        benefits: [
            { available: true, description: "Messaging" },
            { available: true, description: "Questionnnaire" },
            { available: true, description: "Voice Call" },
            { available: true, description: "Video Call" },
            { available: true, description: "3 Sessions" },
            { available: true, description: "6 Sessions" },
            { available: true, description: "9 Sessions Plus an Extra Session" },
        ],
        extras: {
            duration: 90,
            session: 10,
            packages: ["MESSAGING", "VIDEO_CALL", "VOICE_CALL", "QUESTIONNAIRE"]
        }
    },
]

const SubscriptionConstantIDs: string[] = [
    "adae3ffc-6665-4854-9922-2022f13b4d19",
    "48a6a251-6a70-473d-a8fb-3b5792a6c501",
    "dd814c18-fbf1-4754-87d4-756ba9273469", 
]

const access_token = "ksghhfguifgugfyenegygeugdusegd";

export const GetSubscriptionConstants = () => {
    console.log({ Raw_Input: { access_token, request_query: { status: "active" } } })

    return { access_token, request_query: { status: "active" } };
}

export const GetSubscriptionConstant = () => {
    const random = getRandomInt(0, SubscriptionConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: SubscriptionConstantIDs[random] } })

    return { access_token, id: SubscriptionConstantIDs[random] };
}

export const CreateSubscriptionConstant = () => {
    const random = getRandomInt(0, SubscriptionConstants.length - 1);

    console.log({ Raw_Input: {  access_token, ...SubscriptionConstants[random] } })

    return { access_token, ...SubscriptionConstants[random] };
}

export const UpdateSubscriptionConstant = () => {
    const random = getRandomInt(0, SubscriptionConstants.length - 1);

    console.log({ Raw_Input: { access_token, id: SubscriptionConstantIDs[random], ...SubscriptionConstants[random] } })

    return { access_token, id: SubscriptionConstantIDs[random], ...SubscriptionConstants[random] };
}

export const DeleteSubscriptionConstant = () => {
    const random = getRandomInt(0, SubscriptionConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: SubscriptionConstantIDs[random] } })

    return { access_token, id: SubscriptionConstantIDs[random] };
}