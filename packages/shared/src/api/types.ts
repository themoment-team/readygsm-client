export interface ApiResponseType<T> {
  status: string;
  code: number;
  message: string;
  data: T;
}
