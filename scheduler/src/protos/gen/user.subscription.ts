import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';


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
    CreateUserSubscription: MessageTypeDefinition
    DeleteUserSubscription: MessageTypeDefinition
    GetAllUserSubscriptions: MessageTypeDefinition
    GetOneUserSubscription: MessageTypeDefinition
    PaymentInfo: MessageTypeDefinition
    UpdateUserSubscription: MessageTypeDefinition
    UserBillingType: EnumTypeDefinition
    UserPaymentMethodType: EnumTypeDefinition
    UserSubscriptionMessage: MessageTypeDefinition
    UserSubscriptionRequest: MessageTypeDefinition
    UserSubscriptionResponse: MessageTypeDefinition
    UserSubscriptionsResponse: MessageTypeDefinition
  }
}

