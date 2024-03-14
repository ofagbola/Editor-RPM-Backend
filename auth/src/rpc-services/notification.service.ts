import * as grpc from '@grpc/grpc-js';
import logger from '../utils/logger';
import * as notification_controller from '../controllers/notification.controller';
import { notificationProtoDefinition } from '../protos';
import { applyMiddleware } from '../middlewares/app.middleware';
import { validateSchema } from '../utils/utils';
import { SubscribeSchema, NotifySchema } from '../schemas/notification.schema';
import { authorizer } from '../middlewares/app.middleware';

/**
 * Notification RPC Services.
 * @param  {Server} server
 *
 */

export const notificationRpcService = (
  server: grpc.Server | undefined
): void => {
  try {
    server!.addService(
      notificationProtoDefinition.NotificationServices.service,
      {
        subscribe: applyMiddleware([
          validateSchema(SubscribeSchema),
          notification_controller.subscribe,
        ]),

        notify: applyMiddleware([
          validateSchema(NotifySchema),

          notification_controller.notify,
        ]),
      }
    );
    logger.info(`Notification services loaded`);
  } catch (error) {
    logger.error(`Notification services failed to load ${error}`);
  }
};
