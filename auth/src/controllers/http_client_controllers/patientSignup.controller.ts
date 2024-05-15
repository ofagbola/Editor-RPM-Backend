import { NextFunction, Request, Response } from "express";
import { PatientSignupPayload } from "../../../src/protos/auth_pb";
import { AuthServiceClient } from "../../../src/utils/auth-service-client";
import { GRPC_ERROR_CODES } from "../../../src/utils/grpc-error-codes";

export const patientSignupController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body;

  console.log({ payload });

  try {
    const request = new PatientSignupPayload();

    request.setEmail(payload.email);
    request.setDateOfBirth(payload.date_of_birth);
    request.setFirstName(payload.first_name);
    request.setLastName(payload.last_name);
    request.setPhoneNumber(payload.phone_number);

    return AuthServiceClient.patientSignup(request, (error, response: any) => {
      if (error) {
        console.log({ errorFromPatientBlock: error });
        return res.status(GRPC_ERROR_CODES[error.code].status_code).json({
          status: GRPC_ERROR_CODES[error.code].description,
          error: JSON.parse(error.details).errors,
        });
      } else {
        console.log({ responseFromPatientBlock: response });
        return res
          .status(201)
          .json({ message: "success", response: response.array });
      }
    });
  } catch (error) {
    console.log({ errorFromCatch: error });
    res
      .status(500)
      .json({ message: "an error occured", error: JSON.stringify(error) });
  }
};
