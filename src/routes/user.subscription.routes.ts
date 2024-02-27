import { UserSubscriptionServiceHandlers } from '../protos/gen/scheduler/UserSubscriptionService';
import {
    GetUserSubscriptions,
    GetUserSubscription,
    CreateUserSubscription,
    UpdateUserSubscription,
    DeleteUserSubscription
} from '../controllers/user.subscription.controller';

export const UserSubscriptionRoutes: UserSubscriptionServiceHandlers = {
    GetUserSubscriptions,
    GetUserSubscription,
    CreateUserSubscription,
    UpdateUserSubscription,
    DeleteUserSubscription
} 