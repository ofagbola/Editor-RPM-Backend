import * as utils from '../utils/utils';
import * as services from '../services/notification.services';
import { DataBaseError, RequestError } from '../utils/errors';
import * as grpc from '@grpc/grpc-js';

/**
 * Subscribe Controller.
 * @param  {grpc.Call} call
 * @param  {grpc.requestCallback} callback
 *
 */

export const subscribe = async (call: any, callback: any): Promise<void> => {
  try {
    const { uuid, topics } = call.request;

    const payload = {
      topics,
      uuid,
    };

    const response = await services.subscribe(payload);

    callback(null, {
      message: response.message,
      statusCode: response.code,
      data: JSON.stringify(response.data),
    });
  } catch (error) {
    if (error instanceof DataBaseError) {
      const errorResponse = utils.buildErrorResponse(
        'Server error',
        grpc.status.INTERNAL
      );
      callback({
        code: errorResponse.code,
        message: errorResponse.details,
      });
    } else if (error instanceof RequestError) {
      const errorResponse = utils.buildErrorResponse(
        error,
        error.code ?? grpc.status.OK
      );
      callback({
        code: errorResponse.code,
        message: errorResponse.details,
      });
    } else {
      const errorResponse = utils.buildErrorResponse(
        'Server error',
        grpc.status.INTERNAL
      );
      callback({
        code: errorResponse.code,
        message: errorResponse.details,
      });
    }
  }
};

/**
 * Notify Controller.
 * @param  {grpc.Call} call
 * @param  {grpc.requestCallback} callback
 *
 */

export const notify = async (call: any, callback: any): Promise<void> => {
  try {
    call.on('data', async function (notificationData: any) {
      const { title, body, sender } = notificationData;

      const payload = {
        title,
        body,
        group: notificationData?.body?.group,
        sender,
      };

      await services.notify(payload, call);
    });
  } catch (error) {
    call.end();
  }
};
