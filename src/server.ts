import { app } from './app';
import { authRpcService } from './rpc-services/auth.rpc.service';
import { notificationRpcService } from './rpc-services/notification.service';

const grpc = app();

// Remote services
authRpcService(grpc);
notificationRpcService(grpc);
