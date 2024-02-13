import * as grpc from '@grpc/grpc-js';
import 'dotenv/config';
import logger from './utils/logger';

const PORT = process.env.RPC_PORT || 5000;
const signals = ['SIGINT', 'SIGTERM'];

// const interceptor = function (options: any, nextCall: any) {
//   // return new grpc.ServerInterceptingCall(nextCall(options), {});
//   console.log(nextCall);
//   return {

//   }
// } as any;

// {
//     start: (metadata, listner, next) => {
//       console.log(listner, metadata);
//       next(metadata, options);
//     },
//   }

export const app = () => {
  try {
    const server = new grpc.Server({});

    server.bindAsync(
      `0.0.0.0:${PORT}`,
      grpc.ServerCredentials.createInsecure(),
      (error: Error | null, port: number): void => {
        if (error) {
          logger.error(`RPC Server failed ${error}`);
          server.forceShutdown();
          return;
        }
        logger.info(`RPC Server running on port ${port}`);
      }
    );

    const shutdown = async (signal: string) => {
      server.forceShutdown();
      logger.error(`RPC Server Stopped by ${signal}`);
    };

    signals.forEach((signal) => {
      process.on(signal, () => {
        shutdown(signal);
      });
    });

    return server;
  } catch (error) {
    logger.error(`RPC Server failed ${error}`);
  }
};
