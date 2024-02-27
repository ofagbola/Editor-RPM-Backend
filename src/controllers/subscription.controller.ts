//  import bcrypt from 'bcryptjs';
import * as grpc from '@grpc/grpc-js';
import {
  createSubscriptionRequest,
  findUniqueSubscriptionRequest,
  findSubscriptionRequest,
  updateSubscriptionRequest,
  deleteSubscriptionRequest
} from '../services/subscription.services';
import { CreateSubscription__Output } from '../protos/gen/scheduler/CreateSubscription';
import { SubscriptionResponse__Output } from '../protos/gen/scheduler/SubscriptionResponse';
import { SubscriptionsResponse__Output } from '../protos/gen/scheduler/SubscriptionsResponse';
import { GetAllSubscriptions__Output } from '../protos/gen/scheduler/GetAllSubscriptions';
import { GetOneSubscription__Output } from '../protos/gen/scheduler/GetOneSubscription';
import { SubscriptionMessage__Output } from '../protos/gen/scheduler/SubscriptionMessage';
import { UpdateSubscription__Output } from '../protos/gen/scheduler/UpdateSubscription';
import { DeleteSubscription__Output } from '../protos/gen/scheduler/DeleteSubscription';
import { deserializeUser } from '../middlewares/deserializeUser'

export const CreateSubscription = async (
  req: grpc.ServerUnaryCall<CreateSubscription__Output, SubscriptionMessage__Output>,
  res: grpc.sendUnaryData<SubscriptionMessage__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }      

    const benefits: any =  req.request.benefits;

    await createSubscriptionRequest({
      name: req.request.name,
      amount: req.request.amount,
      currency: req.request.currency,
      discount: req.request.discount,
      billing: req.request.billing,
      paymentMethod: req.request.paymentMethod,
      benefits: benefits,
    });

    res(null, {code: grpc.status.OK, message: "Subscription added successfully"});
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Subscription already exists',
      });
    }

    res({ code: grpc.status.INTERNAL, message: err.message.details });
  }
};

export const GetSubscriptions = async (
  req: grpc.ServerUnaryCall<GetAllSubscriptions__Output, SubscriptionsResponse__Output>,
  res: grpc.sendUnaryData<SubscriptionsResponse__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const subscriptions = await findSubscriptionRequest({ ...req.request.request_query });

    const formattedSubscriptions: any = subscriptions.map(subscription => ({
      ...subscription,
      created_at: { 
        seconds: (subscription.created_at.getTime() / 1000).toString(), 
        nanos: subscription.created_at.getMilliseconds() * 1000000
      },
      updated_at: { 
        seconds: (subscription.updated_at.getTime() / 1000).toString(), 
        nanos: subscription.updated_at.getMilliseconds() * 1000000
      }
    }));
    
    res(null, {
      code: grpc.status.OK,
      data: formattedSubscriptions
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const GetSubscription = async (
  req: grpc.ServerUnaryCall<GetOneSubscription__Output, SubscriptionResponse__Output>,
  res: grpc.sendUnaryData<SubscriptionResponse__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const subscription: any = await findUniqueSubscriptionRequest({ id: req.request.id });

    if(!subscription) {
      res({
        code: grpc.status.NOT_FOUND,
        message: 'Subscription not found!',
      });
      return;
    }

    res(null, {
      code: grpc.status.OK,
      data: {
        id: subscription.id,
        name: subscription.name,
        status: subscription.status,
        amount: subscription.amount,
        currency: subscription.currency,
        discount: subscription.discount,
        billing: subscription.billing,
        paymentMethod: subscription.paymentMethod,
        benefits: subscription.benefits,
        created_at: { 
          seconds: (subscription.created_at.getTime() / 1000).toString(),
          nanos: subscription.created_at.getMilliseconds() * 1000000 
        },
        updated_at: { 
          seconds: (subscription.updated_at.getTime() / 1000).toString(),
          nanos: subscription.updated_at.getMilliseconds() * 1000000  
        },
      },
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message.details,
    });
  }
};

export const UpdateSubscription = async (
  req: grpc.ServerUnaryCall<UpdateSubscription__Output, SubscriptionMessage__Output>,
  res: grpc.sendUnaryData<SubscriptionMessage__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const benefits: any = req.request.benefits;

    await updateSubscriptionRequest({id : req.request.id}, {
      name: req.request.name,
      status: req.request.status,
      amount: req.request.amount,
      currency: req.request.currency,
      discount: req.request.discount,
      billing: req.request.billing,
      paymentMethod: req.request.paymentMethod,
      benefits: benefits,
    });

    res(null, {code: grpc.status.OK, message: "Subscription updated successfully"});
  } catch (err: any) {
    res({ code: grpc.status.INTERNAL, message: err.message.details });
  }
};

export const DeleteSubscription = async (
  req: grpc.ServerUnaryCall<DeleteSubscription__Output, SubscriptionMessage__Output>,
  res: grpc.sendUnaryData<SubscriptionMessage__Output>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    await deleteSubscriptionRequest({ id: req.request.id });

    res(null, {
      code: grpc.status.OK,
      message: "Subscription deleted successfully"
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message.details,
    });
  }
};