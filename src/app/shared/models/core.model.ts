export interface ICommonResponse<T = {}> {
  data: T;
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
}
export enum ResultCodes {
  success = 0,
  error = 1
}

export interface MeResponse {
  data: {
    id: number,
    login: string
    email: string
  }
}
