import { SubscriptionServiceHandlers } from '../protos/gen/scheduler/SubscriptionService';
import {
    GetSubscriptions,
    GetSubscription,
    CreateSubscription,
    UpdateSubscription,
    DeleteSubscription
} from '../controllers/subscription.controller';

export const SubscriptionRoutes: SubscriptionServiceHandlers = {
    GetSubscriptions,
    GetSubscription,
    CreateSubscription,
    UpdateSubscription,
    DeleteSubscription
} 