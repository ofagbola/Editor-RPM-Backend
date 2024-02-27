import { ReviewServiceHandlers } from '../protos/gen/scheduler/ReviewService';
import {
    GetDoctorReviews,
    GetSessionReviews,
    CreateReview,
    UpdateReview,
    DeleteReview
} from '../controllers/review.controller';

export const ReviewRoutes: ReviewServiceHandlers = {
    GetDoctorReviews,
    GetSessionReviews,
    CreateReview,
    UpdateReview,
    DeleteReview
} 