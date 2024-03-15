import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { ReviewServiceClient as _scheduler_ReviewServiceClient, ReviewServiceDefinition as _scheduler_ReviewServiceDefinition } from './scheduler/ReviewService';
import type { ScheduleServiceClient as _scheduler_ScheduleServiceClient, ScheduleServiceDefinition as _scheduler_ScheduleServiceDefinition } from './scheduler/ScheduleService';
import type { SubscriptionServiceClient as _scheduler_SubscriptionServiceClient, SubscriptionServiceDefinition as _scheduler_SubscriptionServiceDefinition } from './scheduler/SubscriptionService';
import type { UserSubscriptionServiceClient as _scheduler_UserSubscriptionServiceClient, UserSubscriptionServiceDefinition as _scheduler_UserSubscriptionServiceDefinition } from './scheduler/UserSubscriptionService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  scheduler: {
    Benefits: MessageTypeDefinition
    CreateReSchedule: MessageTypeDefinition
    CreateReview: MessageTypeDefinition
    CreateSchedule: MessageTypeDefinition
    CreateSubscription: MessageTypeDefinition
    CreateUserSubscription: MessageTypeDefinition
    DeleteReSchedule: MessageTypeDefinition
    DeleteReview: MessageTypeDefinition
    DeleteSchedule: MessageTypeDefinition
    DeleteSubscription: MessageTypeDefinition
    DeleteUserSubscription: MessageTypeDefinition
    DoctorType: EnumTypeDefinition
    ExtraPackages: EnumTypeDefinition
    Extras: MessageTypeDefinition
    GetAllSchedules: MessageTypeDefinition
    GetAllSubscriptions: MessageTypeDefinition
    GetAllUserSubscriptions: MessageTypeDefinition
    GetDoctorReviews: MessageTypeDefinition
    GetOneSchedule: MessageTypeDefinition
    GetOneSubscription: MessageTypeDefinition
    GetOneUserSubscription: MessageTypeDefinition
    GetSessionReviews: MessageTypeDefinition
    Packages: EnumTypeDefinition
    PaymentInfo: MessageTypeDefinition
    ReviewMessage: MessageTypeDefinition
    ReviewRequest: MessageTypeDefinition
    ReviewResponse: MessageTypeDefinition
    ReviewService: SubtypeConstructor<typeof grpc.Client, _scheduler_ReviewServiceClient> & { service: _scheduler_ReviewServiceDefinition }
    ReviewsResponse: MessageTypeDefinition
    Schedule: MessageTypeDefinition
    ScheduleMessage: MessageTypeDefinition
    ScheduleRequest: MessageTypeDefinition
    ScheduleResponse: MessageTypeDefinition
    ScheduleService: SubtypeConstructor<typeof grpc.Client, _scheduler_ScheduleServiceClient> & { service: _scheduler_ScheduleServiceDefinition }
    ScheduleStatus: EnumTypeDefinition
    SchedulesResponse: MessageTypeDefinition
    Status: EnumTypeDefinition
    SubscriptionBillingType: EnumTypeDefinition
    SubscriptionMessage: MessageTypeDefinition
    SubscriptionPaymentMethodType: EnumTypeDefinition
    SubscriptionRequest: MessageTypeDefinition
    SubscriptionResponse: MessageTypeDefinition
    SubscriptionService: SubtypeConstructor<typeof grpc.Client, _scheduler_SubscriptionServiceClient> & { service: _scheduler_SubscriptionServiceDefinition }
    SubscriptionsResponse: MessageTypeDefinition
    UpdateReSchedule: MessageTypeDefinition
    UpdateReview: MessageTypeDefinition
    UpdateSchedule: MessageTypeDefinition
    UpdateSubscription: MessageTypeDefinition
    UpdateUserSubscription: MessageTypeDefinition
    User: MessageTypeDefinition
    UserBillingType: EnumTypeDefinition
    UserPaymentMethodType: EnumTypeDefinition
    UserSubscriptionMessage: MessageTypeDefinition
    UserSubscriptionRequest: MessageTypeDefinition
    UserSubscriptionResponse: MessageTypeDefinition
    UserSubscriptionService: SubtypeConstructor<typeof grpc.Client, _scheduler_UserSubscriptionServiceClient> & { service: _scheduler_UserSubscriptionServiceDefinition }
    UserSubscriptionsResponse: MessageTypeDefinition
    UserType: EnumTypeDefinition
  }
}

