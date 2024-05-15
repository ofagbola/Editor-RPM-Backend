/**
 * @file Logger
 */

import winston, { Logger } from 'winston';

let level = 'info';
if (process.env.NODE_ENV === 'production') {
  level = 'warn';
}

const options = {
  silent: false,
  level: level,
  exitOnError: false,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
      ),
    }),
  ],
};

const logger = winston.createLogger(options);
export default logger;
