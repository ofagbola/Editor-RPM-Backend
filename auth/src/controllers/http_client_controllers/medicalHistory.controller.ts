import { Request, Response } from "express";
import { CreatePasswordPayload, InsurancePayload, LoginPayload } from "../../protos/auth_pb";
import { AuthServiceClient } from "../../utils/auth-service-client";
import { GRPC_ERROR_CODES } from "../../utils/grpc-error-codes";

export const setMedicalHistoryController = async (
  req: Request,
  res: Response
) => {
  const { email, password } = req.body;
  console.log({ email, password });

  try {
    const request = new InsurancePayload();

    request.setEmail(email);
    // request.setPassword(password);

    return AuthServiceClient.updateInsurance(request, (error, response: any) => {
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
    });
  } catch (error) {
    console.log({ errorFromCatch: error });
    res
      .status(500)
      .json({ message: "an error occured", error: JSON.stringify(error) });
  }
};
