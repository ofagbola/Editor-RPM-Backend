import { Request, Response } from "express";
import {
  CreatePasswordPayload,
  InsurancePayload,
  LoginPayload,
} from "../../protos/auth_pb";
import { AuthServiceClient } from "../../utils/auth-service-client";
import { GRPC_ERROR_CODES } from "../../utils/grpc-error-codes";

export const updateMedicalHistoryController = async (
  req: Request,
  res: Response
) => {
  const {
    email,
    provider,
    outOfNetworkExpenses,
    coPay,
    outOfPocketExpenses,
    medicalHistory,
  } = req.body;

  console.log({
    email,
    provider,
    outOfNetworkExpenses,
    coPay,
    outOfPocketExpenses,
    medicalHistory,
  });

  try {
    const request = new InsurancePayload();

    request.setEmail(email);
    request.setCoPay(coPay);
    request.setOutOfNetworkExpenses(outOfNetworkExpenses);
    request.setOutOfPocketExpenses(outOfPocketExpenses);
    request.setProvider(provider);
    request.setMedicalhistoryList(medicalHistory);
    // request.setPassword(password);

    return AuthServiceClient.updateInsurance(
      request,
      (error, response: any) => {
        if (error) {
          console.log({ errorFromLoginBlock: error });
          return res.status(GRPC_ERROR_CODES[error.code].status_code).json({
            status: GRPC_ERROR_CODES[error.code].description,
            error: JSON.parse(error.details).errors,
          });
        } else {
          console.log({ responseFromLoginBlock: response });
          return res
            .status(200)
            .json({ message: "success", response: response.array[2] });
        }
      }
    );
  } catch (error) {
    console.log({ errorFromCatch: error });
    res
      .status(500)
      .json({ message: "an error occured", error: JSON.stringify(error) });
  }
};
