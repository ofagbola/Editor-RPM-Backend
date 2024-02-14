import { app } from './app';
import { authRpcService } from './rpc-services/questionnaire.rpc.service';

const grpc = app();

// Remote services
authRpcService(grpc);
