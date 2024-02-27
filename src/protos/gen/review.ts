import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';


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
    CreateReview: MessageTypeDefinition
    DeleteReview: MessageTypeDefinition
    GetDoctorReviews: MessageTypeDefinition
    GetSessionReviews: MessageTypeDefinition
    ReviewMessage: MessageTypeDefinition
    ReviewRequest: MessageTypeDefinition
    ReviewResponse: MessageTypeDefinition
    ReviewsResponse: MessageTypeDefinition
    UpdateReview: MessageTypeDefinition
  }
}

