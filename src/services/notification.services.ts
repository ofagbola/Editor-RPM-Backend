import {
  INotifyRequest,
  ISubscribeRequest,
} from '../interfaces/notification.interface';
import { IResponse } from '../interfaces';
import * as repository from '../repositories/notification.repositories';

/**
 * Subscribe.
 * @returns Promise
 */
export const subscribe = async (
  payload: ISubscribeRequest
): Promise<IResponse> => {
  try {
    return await repository.subscribe(payload);
  } catch (error) {
    throw error;
  }
};

/**
 * Notify.
 * @returns Promise
 */
export const notify = async (
  payload: INotifyRequest,
  call: any
): Promise<void> => {
  try {
    return await repository.notify(payload, call);
  } catch (error) {
    throw error;
  }
};
