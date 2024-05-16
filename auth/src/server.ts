import { app } from "./app";
import express from "express";
import cors from "cors";
import http_client from "./http_server";

import { authRpcService } from "./rpc-services/auth.rpc.service";
const server = express();
const grpc = app();

// Remote services
authRpcService(grpc);

server.use(cors());
server.use(express.json());

server.use(http_client);
server.listen(5770, "0.0.0.0", async () => {
  console.log({ message: "we are working on server port 5770" });
});
