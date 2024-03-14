import * as grpc from '@grpc/grpc-js';
import 'dotenv/config';
import logger from './utils/logger';
import sql from './utils/db';

const PORT = process.env.RPC_PORT || 4000;
const signals = ['SIGINT', 'SIGTERM'];

export const app = () => {
  try {
    const server = new grpc.Server({});

    sql`SELECT * FROM users`
      .then((users: any) => {
         console.log(users);
      })
      .catch((error: any) => {
        console.log(error);
      });

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
