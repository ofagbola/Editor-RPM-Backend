import { Request, Response } from "express";
import { CreatePasswordPayload } from "../../protos/auth_pb";
import { AuthServiceClient } from "../../utils/auth-service-client";
import { GRPC_ERROR_CODES } from "../../utils/grpc-error-codes";

export const createPasswordController = async (req: Request, res: Response) => {
  const payload = req.body;

  console.log({ payload });

  try {
    const request = new CreatePasswordPayload();

    request.setEmail(payload.email);
    request.setPassword(payload.password);

    return AuthServiceClient.createPassword(request, (error, response: any) => {
      if (error) {
        console.log({ errorFromPatientBlock: error });
        return res.status(GRPC_ERROR_CODES[error.code].status_code).json({
          status: GRPC_ERROR_CODES[error.code].description,
          error: JSON.parse(error.details).errors,
        });
      } else {
        console.log({ responseFromPatientBlock: response });
        return res
          .status(200)
          .json({ message: "success", response: response.array[2] });
      }
    });
  } catch (error) {
    console.log({ errorFromCatch: error });
    return res
      .status(500)
      .json({ message: "an error occured", error: JSON.stringify(error) });
  }
};
