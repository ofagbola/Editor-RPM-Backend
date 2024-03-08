import { getRandomInt } from "../utils/utils";

const CategoryConstants = [
    {
        name: "Diabities",
        status: "active"
    },
    {
        name: "Malaria",
        status: "active"
    },
    {
        name: "Blood Pressure",
        status: "active"
    },
]

const CategoryConstantIDs: string[] = [
    "a5b10cc5-2c37-48aa-a815-86d97200f369",
    "021f27e6-90f2-4ebe-879b-8e3a9051d784"
]

const access_token = "gyugauydaawdiugidbaiuwgdawduyagd";

export const GetCategoryConstants = () => {
    console.log({ Raw_Input: { access_token, request_query: { status: "active" } } })

    return { access_token, request_query: { status: "active" } };
}

export const GetCategoryConstant = () => {
    const random = getRandomInt(0, CategoryConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: CategoryConstantIDs[random] } })

    return { access_token, id: CategoryConstantIDs[random] };
}

export const CreateCategoryConstant = () => {
    const random = getRandomInt(0, CategoryConstants.length - 1);

    console.log({ Raw_Input: {  access_token, ...CategoryConstants[random] } })

    return { access_token, ...CategoryConstants[random] };
}

export const UpdateCategoryConstant = () => {
    const random = getRandomInt(0, CategoryConstants.length - 1);
    const randomId = getRandomInt(0, CategoryConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: CategoryConstantIDs[randomId], ...CategoryConstants[random] } })

    return { access_token, id: CategoryConstantIDs[randomId], ...CategoryConstants[random] };
}

export const DeleteCategoryConstant = () => {
    const random = getRandomInt(0, CategoryConstantIDs.length - 1);

    console.log({ Raw_Input: { access_token, id: CategoryConstantIDs[random] } })

    return { access_token, id: CategoryConstantIDs[random] };
}