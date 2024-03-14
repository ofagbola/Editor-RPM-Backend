import { app } from './app';
import { startRedis } from './utils/redis';
import { authRpcService } from './rpc-services/auth.rpc.service';
import { notificationRpcService } from './rpc-services/notification.service';

const grpc = app();
startRedis();

// Remote services
authRpcService(grpc);
notificationRpcService(grpc);
