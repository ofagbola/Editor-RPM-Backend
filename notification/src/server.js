/**
 * @file Server.
 */

import app from './app.js';
import 'dotenv/config';
import logger from './utils/logger.js';
import { connectDB } from './utils/db.js';
import { InitSocket } from './utils/socket.js';
import http from 'http';

const port = process.env.PORT || 3000;
const signals = ['SIGINT', 'SIGTERM'];

const hostname = '0.0.0.0';

const server = http.createServer(app);

server.listen(port, hostname, async () => {
  await connectDB();
  await InitSocket(server);
  logger.info(`Running on port ${port}`);
});

const shutdown = async (signal) => {
  server.close(async () => {
    logger.error(`Stopped by ${signal}`);
  });
};

signals.forEach((signal) => {
  process.on(signal, (error) => {
    console.log(error);
    shutdown(signal);
  });
});
