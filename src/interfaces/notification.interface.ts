export interface ISubscribeRequest {
  uuid: string;
  topics: string[];
}

export interface INotifyRequest {
  title: string;
  sender: string;
  body: {
    message: string;
    group: string;
  };
}
