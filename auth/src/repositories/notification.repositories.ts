import { NotificationModel } from '../models/notification.model';
import * as utils from '../utils/utils';
import { RequestError } from '../utils/errors';
import { IResponse } from '../interfaces';
import * as grpc from '@grpc/grpc-js';
import { v4 as uuidv4 } from 'uuid';
import {
  INotifyRequest,
  ISubscribeRequest,
} from '../interfaces/notification.interface';
import { notificationProtoDefinition } from '../protos';
import { redisSet, redisGet } from '../utils/redis';

/**
 * Subscribe
 * @return promise
 */

export const subscribe = async (
  payload: ISubscribeRequest
): Promise<IResponse> => {
  try {
    const { uuid, topics } = payload;

    const subscriber = await NotificationModel.findUserById(
      'subscribers',
      ['sub_uuid', 'topics'],
      uuid
    );

    if (subscriber.length === 0) {
      // create new one
      await NotificationModel.createSubscriber({
        uuid,
        topics,
      });
    } else {
      // update topics
      await NotificationModel.updateUser(
        'subscribers',
        ['topics'],
        {
          topics,
        },
        uuid
      );
    }

    return {
      code: grpc.status.OK,
      message: 'Subscribed successfully',
      data: [],
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * Subscribe
 * @return promise
 */

let groupClients: any = {};

export const notify = async (
  payload: INotifyRequest,
  call: any
): Promise<void> => {
  try {
    // const { body, sender } = payload;

    // await NotificationModel.updateUser(
    //   'subscribers',
    //   ['call'],
    //   {
    //     call: JSON.stringify(call),
    //   },
    //   sender
    // );

    call.on('data', async function ({ body, sender }: any) {
      try {
        if (!(await redisGet(sender))) {
          await redisSet(sender, JSON.stringify(call));
        }

        // console.log(redisClient, 'client');

        // if (!groupClients[body.group]) {
        //   groupClients[body.group] = new Map();
        // }

        // groupClients[body.group].add(call);

        // const subscribers = await NotificationModel.findNotificationByTopic(
        //   'subscribers',
        //   ['sub_uuid', 'call'],
        //   body.group
        // );

        // subscribers.forEach((subscriber: any) => {
        //   // const h = JSON.parse(subscriber.call.call);
        //   // console.log(h, 'here');
        //   // const client = JSON.parse(subscriber.call);
        //   // // notificationProtoDefinition.NotificationServices.service.Client(
        //   // //   subscriber.call.call
        //   // // );

        //   // call.write(payload);

        //   groupClients[body.group].forEach((client: any) => {
        //     client.write(payload);
        //   });
        // });
        let client = await redisGet(sender);
        client = JSON.parse(client);
        call.write({
          message: 'hi',
        });
        console.log(client);
      } catch (error) {
        console.log(error, 'erro');
      }
    });

    call.on('end', async function () {
      // await NotificationModel.updateUser(
      //   'subscribers',
      //   ['call'],
      //   {
      //     call: null,
      //   },
      //   sender
      // );
      //call.end();
      // groupClients[body.group].delete(call);
    });
  } catch (error) {
    throw error;
  }
};
