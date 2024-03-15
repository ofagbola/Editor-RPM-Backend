//  import bcrypt from 'bcryptjs';
import * as grpc from '@grpc/grpc-js';
import {
  createUserSubscriptionRequest,
  findUniqueUserSubscriptionRequest,
  findUserSubscriptionRequest,
  updateUserSubscriptionRequest,
  deleteUserSubscriptionRequest
} from '../services/user.subscription.services';

import { findUniqueSubscriptionRequest } from '../services/subscription.services';

import { CreateUserSubscription__Output } from '../protos/gen/scheduler/CreateUserSubscription';
import { UserSubscriptionsResponse__Output } from '../protos/gen/scheduler/UserSubscriptionsResponse';
import { UserSubscriptionResponse__Output } from '../protos/gen/scheduler/UserSubscriptionResponse';
import { GetAllUserSubscriptions__Output } from '../protos/gen/scheduler/GetAllUserSubscriptions';
import { GetOneUserSubscription__Output } from '../protos/gen/scheduler/GetOneUserSubscription';
import { UserSubscriptionMessage__Output } from '../protos/gen/scheduler/UserSubscriptionMessage';
import { UpdateUserSubscription__Output } from '../protos/gen/scheduler/UpdateUserSubscription';
import { DeleteUserSubscription__Output } from '../protos/gen/scheduler/DeleteUserSubscription';
import { deserializeUser } from '../middlewares/deserializeUser';
import { RequestValidator } from '../middlewares/requestValidator';
import {
  CreateUserSubscriptonValidator,
  GetAllUserSubscriptonValidator,
  GetUserSubscriptonValidator,
  UpdateUserSubscriptonValidator,
  DeleteUserSubscriptonValidator
} from '../validators/user.subscription.validator'

export const CreateUserSubscription = async (
  req: grpc.ServerUnaryCall<CreateUserSubscription__Output, UserSubscriptionMessage__Output>,
  res: grpc.sendUnaryData<UserSubscriptionMessage__Output>
) => {
  try {
    const validate = await RequestValidator(CreateUserSubscriptonValidator, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const subscription = await findUniqueSubscriptionRequest({ id: req.request.subscriptionId })

    const discount = (subscription.discount / 100) * subscription.amount;

    const amount = subscription.amount - discount;

    const outstanding: any = amount - req.request.paid;

    const paymentInfo: any = {...req.request.paymentInfo, cardNumber: req.request.paymentInfo?.cardNumber}

    await createUserSubscriptionRequest({
      subscriptionId: req.request.subscriptionId,
      userId: user.id,
      paid: req.request.paid,
      outstanding: outstanding,
      discount: discount,
      billing: req.request.billing,
      paymentMethod: req.request.paymentMethod,
      paymentInfo: paymentInfo,
      status: "active",
    });

    res(null, {code: grpc.status.OK, message: "User Subcription added successfully"});
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'User Subcription already exists',
      });
    }

    res({ code: grpc.status.INTERNAL, message: err.message.details });
  }
};

export const GetUserSubscriptions = async (
  req: grpc.ServerUnaryCall<GetAllUserSubscriptions__Output, UserSubscriptionsResponse__Output>,
  res: grpc.sendUnaryData<UserSubscriptionsResponse__Output>
) => {
  try {
    const validate = await RequestValidator(GetAllUserSubscriptonValidator, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const user_subscriptions = await findUserSubscriptionRequest({ ...req.request.request_query });

    const formatted_user_subscriptions: any = user_subscriptions.map(us => ({
      ...us,
      created_at: { 
        seconds: (us.created_at.getTime() / 1000).toString(), 
        nanos: us.created_at.getMilliseconds() * 1000000
      },
      updated_at: { 
        seconds: (us.updated_at.getTime() / 1000).toString(), 
        nanos: us.updated_at.getMilliseconds() * 1000000
      }
    }));
    
    res(null, {
      code: grpc.status.OK,
      data: formatted_user_subscriptions
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const GetUserSubscription = async (
  req: grpc.ServerUnaryCall<GetOneUserSubscription__Output, UserSubscriptionResponse__Output>,
  res: grpc.sendUnaryData<UserSubscriptionResponse__Output>
) => {
  try {
    const validate = await RequestValidator(GetUserSubscriptonValidator, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const user_subscription: any = await findUniqueUserSubscriptionRequest({ id: req.request.id });

    if(!user_subscription) {
      res({
        code: grpc.status.NOT_FOUND,
        message: 'User Subscription not found!',
      });
      return;
    }

    const billing: any = user_subscription.billing;

    res(null, {
      code: grpc.status.OK,
      data: {
        id: user_subscription.id,
        subscriptionId: user_subscription.subscriptionId,
        userId: user_subscription.userId,
        paid: user_subscription.paid,
        outstanding: user_subscription.outstanding,
        discount: user_subscription.discount,
        billing: billing,
        status: user_subscription.status,
        paymentInfo: user_subscription.paymentInfo,
        paymentMethod: user_subscription.paymentMethod,
        created_at: { 
          seconds: (user_subscription.created_at.getTime() / 1000).toString(),
          nanos: user_subscription.created_at.getMilliseconds() * 1000000 
        },
        updated_at: { 
          seconds: (user_subscription.updated_at.getTime() / 1000).toString(),
          nanos: user_subscription.updated_at.getMilliseconds() * 1000000  
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

export const UpdateUserSubscription = async (
  req: grpc.ServerUnaryCall<UpdateUserSubscription__Output, UserSubscriptionMessage__Output>,
  res: grpc.sendUnaryData<UserSubscriptionMessage__Output>
) => {
  try {
    const validate = await RequestValidator(UpdateUserSubscriptonValidator, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    const user_subscription = await findUniqueUserSubscriptionRequest({ id: req.request.id })

    const subscription = await findUniqueSubscriptionRequest({ id: user_subscription.subscriptionId })

    const discount = (subscription.discount / 100) * subscription.amount;

    const amount = subscription.amount - discount;

    const outstanding: any = amount - req.request.paid;

    await updateUserSubscriptionRequest({ id : req.request.id }, {
      paid: (req.request.paid + user_subscription.paid),
      outstanding: outstanding,
      status: req.request.status,
    });

    res(null, {code: grpc.status.OK, message: "'User Subcription updated successfully"});
  } catch (err: any) {
    res({ code: grpc.status.INTERNAL, message: err.message.details });
  }
};

export const DeleteUserSubscription = async (
  req: grpc.ServerUnaryCall<DeleteUserSubscription__Output, UserSubscriptionMessage__Output>,
  res: grpc.sendUnaryData<UserSubscriptionMessage__Output>
) => {
  try {
    const validate = await RequestValidator(DeleteUserSubscriptonValidator, req, res);

    if(!validate || !validate.status) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: validate? JSON.stringify(validate.message) : "Null or invalid parameter provided.",
      });
      return;
    }

    const user = await deserializeUser(req.request.access_token);
    
    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    await deleteUserSubscriptionRequest({ id: req.request.id });

    res(null, {
      code: grpc.status.OK,
      message: "'User Subcription deleted successfully"
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message.details,
    });
  }
};