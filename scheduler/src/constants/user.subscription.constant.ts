import { getRandomInt } from "../utils/utils";

const UserSubscriptionConstants = [
    {
        subscriptionId: "dd814c18-fbf1-4754-87d4-756ba9273469",
        paid: 10000.00,
        billing: "MONTHLY",
        paymentMethod: "PAYPAL",
        paymentInfo: {
            name: "William Joe",
            cardNumber: "0",
            paymentId: "TRX-XNF-54N-8HD",
            additionalKey: "3232",
            cvv: 0,
            pin: 5996,
            type: "PAYPAL",
            description: "Plan Payment"
        },
        status: "active"
    },
    {
        subscriptionId: "dd814c18-fbf1-4754-87d4-756ba9273469",
        paid: 150000.00,
        billing: "YEARLY",
        paymentMethod: "CARD",
        paymentInfo: {
            name: "Sarah Bush",
            cardNumber: "78784757787347792812",
            paymentId: "TRX-XNF-54N-8HD",
            additionalKey: "7483",
            cvv: 549,
            pin: 8657,
            type: "CARD",
            description: "Plan Payment"
        },
        status: "active"
    },
    {
        subscriptionId: "48a6a251-6a70-473d-a8fb-3b5792a6c501",
        paid: 10000.00,
        billing: "MONTHLY",
        paymentMethod: "PAYPAL",
        paymentInfo: {
            name: "William Joe",
            cardNumber: "0",
            paymentId: "TRX-XNF-54N-8HD",
            additionalKey: "2322",
            cvv: 0,
            pin: 5996,
            type: "PAYPAL",
            description: "Plan Payment"
        },
        status: "active"
    },
]

const UserSubscriptionConstantIDs: string[] = [
    "4e364d6d-1143-42ee-98b1-11583549772c",
    "950af31e-9b22-4a24-ae42-1b2b9f5c2d75"
]

const access_token = "hsuguyfgedugdugdyugdgdsdy";

export const GetUserSubscriptionConstants = () => {
    console.log({ Raw_Input: { access_token, request_query: { status: "active" } } })

    return { access_token, request_query: { status: "active" } };
}

export const GetUserSubscriptionConstant = () => {
    const random = getRandomInt(0, UserSubscriptionConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: UserSubscriptionConstantIDs[random] } })

    return { access_token, id: UserSubscriptionConstantIDs[random] };
}

export const CreateUserSubscriptionConstant = () => {
    const random = getRandomInt(0, UserSubscriptionConstants.length - 1);

    console.log({ Raw_Input: {  access_token, ...UserSubscriptionConstants[random] } })

    return { access_token, ...UserSubscriptionConstants[random] };
}

export const UpdateUserSubscriptionConstant = () => {
    const random = getRandomInt(0, UserSubscriptionConstants.length - 1);
    const randomId = getRandomInt(0, UserSubscriptionConstantIDs.length - 1);
    const id = UserSubscriptionConstantIDs[randomId];

    console.log({ Raw_Input: { access_token, id, ...UserSubscriptionConstants[random] } })

    return ({ access_token, id, ...UserSubscriptionConstants[random] });
}

export const DeleteUserSubscriptionConstant = () => {
    const random = getRandomInt(0, UserSubscriptionConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: UserSubscriptionConstantIDs[random] } })

    return { access_token, id: UserSubscriptionConstantIDs[random] };
}