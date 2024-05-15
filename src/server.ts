import { app } from './app';
import { authRpcService } from './rpc-services/auth.rpc.service';

const grpc = app();

// Remote services
 authRpcService(grpc);
