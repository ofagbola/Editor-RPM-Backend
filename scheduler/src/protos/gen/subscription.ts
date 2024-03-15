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
    Benefits: MessageTypeDefinition
    CreateSubscription: MessageTypeDefinition
    DeleteSubscription: MessageTypeDefinition
    ExtraPackages: EnumTypeDefinition
    Extras: MessageTypeDefinition
    GetAllSubscriptions: MessageTypeDefinition
    GetOneSubscription: MessageTypeDefinition
    Status: EnumTypeDefinition
    SubscriptionBillingType: EnumTypeDefinition
    SubscriptionMessage: MessageTypeDefinition
    SubscriptionPaymentMethodType: EnumTypeDefinition
    SubscriptionRequest: MessageTypeDefinition
    SubscriptionResponse: MessageTypeDefinition
    SubscriptionsResponse: MessageTypeDefinition
    UpdateSubscription: MessageTypeDefinition
  }
}

