import logger from './utils/logger.js';
import express from 'express';
import winstonMiddleware from 'express-winston';
import {
  allowedHeaders,
  allowedHttpMethods,
} from './middlewares/app.middleware.js';
import cors from 'cors';

const app = express();

app.use(allowedHttpMethods);
app.use(allowedHeaders);

app.use(
  cors({
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 200,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  winstonMiddleware.logger({
    winstonInstance: logger,
    level: (req, res) => {
      let level = 'info';
      if (res.statusCode >= 500) {
        level = 'error';
      } else if (res.statusCode >= 300) {
        level = 'warn';
      }
      return level;
    },
  })
);

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Server is up',
  });
});

export default app;
