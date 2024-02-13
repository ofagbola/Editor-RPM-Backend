import { ResponseData } from '../protos/auth';
import * as utils from '../utils/utils';

/**
 * SIGNUP  Controller.
 * @param  {grpc.Call} call
 *  * @param  {NextCall} callback
 *
 */

const message = ResponseData.create({
  data: {
    testing: 'ok',
    testingg: 'g',
  },
});

export const signup = (call: any, callback: any) => {
  try {
    //console.log(call.metadata);
    callback(null, {
      message: 'okk',
      statusCode: 200,
      testing: [message.data],
    });
  } catch (error) {
    console.log(error);
    callback(error);
  }
};

/**
 * Verify Account Controller.
 * @param  {grpc.Call} call
 *  * @param  {NextCall} callback
 *
 */

export const verifyAccount = (call: any, callback: any): void => {
  try {
    console.log(call.request);
    callback(null, {});
  } catch (error) {
    console.log(error);
    callback(error);
  }
};

/**
 * Finish Up Account  Controller.
 * @param  {grpc.Call} call
 *  * @param  {NextCall} callback
 *
 */

export const finishUpAccount = (call: any, callback: any): void => {
  try {
    console.log(call.request);
    callback(null, {});
  } catch (error) {
    console.log(error);
    callback(error);
  }
};
