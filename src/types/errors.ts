interface ApiErrorResponse {
  message: string;
}

export interface AxiosError {
  response?: {
    status: number;
    data: ApiErrorResponse;
  };
  message: string;
  status: number;
}
