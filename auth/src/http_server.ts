import express, { Request, Response } from "express";
import { patientSignupController } from "./controllers/http_client_controllers/patientSignup.controller";
import { otpVerificationController } from "./controllers/http_client_controllers/otpVerification.controller";
import { createPasswordController } from "./controllers/http_client_controllers/createPassword.controller";
import { loginController } from "./controllers/http_client_controllers/login.controller";

const http_client = express.Router();

http_client.post("/patientSignup", patientSignupController);
http_client.post("/verify-otp", otpVerificationController);
http_client.post("/create-password", createPasswordController);
http_client.post("/login", loginController);

http_client.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "welcome to http_server" });
});

export default http_client;
