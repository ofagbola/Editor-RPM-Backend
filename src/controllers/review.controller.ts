//  import bcrypt from 'bcryptjs';
import * as grpc from '@grpc/grpc-js';
import {
  createReviewRequest,
  findReviewRequest,
  updateReviewRequest,
  deleteReviewRequest
} from '../services/review.services';
import { CreateReview__Output } from '../protos/gen/scheduler/CreateReview';
import { ReviewsResponse__Output } from '../protos/gen/scheduler/ReviewsResponse';
import { GetDoctorReviews__Output } from '../protos/gen/scheduler/GetDoctorReviews';
import { GetSessionReviews__Output } from '../protos/gen/scheduler/GetSessionReviews';
import { ReviewMessage__Output } from '../protos/gen/scheduler/ReviewMessage';
import { UpdateReview__Output } from '../protos/gen/scheduler/UpdateReview';
import { DeleteReview__Output } from '../protos/gen/scheduler/DeleteReview';
import { deserializeUser } from '../middlewares/deserializeUser'

export const CreateReview = async (
  req: grpc.ServerUnaryCall<CreateReview__Output, ReviewMessage__Output>,
  res: grpc.sendUnaryData<ReviewMessage__Output>
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

    await createReviewRequest({
      sessionId: req.request.sessionId,
      doctorId: req.request.doctorId,
      rating: req.request.rating,
      review: req.request.review,
    });

    res(null, {code: grpc.status.OK, message: "Review added successfully"});
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Review already exists',
      });
    }

    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const GetDoctorReviews = async (
  req: grpc.ServerUnaryCall<GetDoctorReviews__Output, ReviewMessage__Output>,
  res: grpc.sendUnaryData<ReviewsResponse__Output>
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

    const reviews = await findReviewRequest({ doctorId: req.request.doctorId, ...req.request.request_query });
    const formattedReviews = reviews.map(review => ({
      ...review,
      created_at: { 
        seconds: (review.created_at.getTime() / 1000).toString(), 
        nanos: review.created_at.getMilliseconds() * 1000000
      },
      updated_at: { 
        seconds: (review.updated_at.getTime() / 1000).toString(), 
        nanos: review.updated_at.getMilliseconds() * 1000000
      }
    }));
    
    res(null, {
      code: grpc.status.OK,
      data: formattedReviews
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const GetSessionReviews = async (
  req: grpc.ServerUnaryCall<GetSessionReviews__Output, ReviewsResponse__Output>,
  res: grpc.sendUnaryData<ReviewsResponse__Output>
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

    const reviews = await findReviewRequest({ sessionId: req.request.sessionId, ...req.request.request_query });
    const formattedReviews = reviews.map(review => ({
      ...review,
      created_at: { 
        seconds: (review.created_at.getTime() / 1000).toString(), 
        nanos: review.created_at.getMilliseconds() * 1000000
      },
      updated_at: { 
        seconds: (review.updated_at.getTime() / 1000).toString(), 
        nanos: review.updated_at.getMilliseconds() * 1000000
      }
    }));
    
    res(null, {
      code: grpc.status.OK,
      data: formattedReviews
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const UpdateReview = async (
  req: grpc.ServerUnaryCall<UpdateReview__Output, ReviewMessage__Output>,
  res: grpc.sendUnaryData<ReviewMessage__Output>
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

    await updateReviewRequest({id : req.request.id}, {
      rating: req.request.rating,
      review: req.request.review,
    });

    res(null, {code: grpc.status.OK, message: "Review updated successfully"});
  } catch (err: any) {
    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const DeleteReview = async (
  req: grpc.ServerUnaryCall<DeleteReview__Output, ReviewMessage__Output>,
  res: grpc.sendUnaryData<ReviewMessage__Output>
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

    await deleteReviewRequest({ id: req.request.id });

    res(null, {
      code: grpc.status.OK,
      message: "Review deleted successfully"
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};