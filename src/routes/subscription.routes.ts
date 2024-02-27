import { UserSubscriptionServiceHandlers } from 'src/protos/gen/scheduler/UserSubscriptionService';
import {
    GetSubscriptions,
    GetSubscription,
    CreateSubscription,
    UpdateSubscription,
    DeleteSubscription
} from '../controllers/subscription.controller';

export const UserSubscriptionRoutes: UserSubscriptionServiceHandlers = {
    GetSubscriptions,
    GetSubscription,
    CreateSubscription,
    UpdateSubscription,
    DeleteSubscription
} 