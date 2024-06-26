export interface IResponse {
  code: number;
  message: string;
  data: { [key: string]: string }[] | {[key: string]: string};
}
