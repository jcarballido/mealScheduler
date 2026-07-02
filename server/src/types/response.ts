export type ResponseStatus = 'success' | 'failure';

export interface ResponseError {
  code: string;
  message: string;
}

export interface ApiResponse<T> {
  status: ResponseStatus;
  data: T | null;
  error: null | ResponseError;
}

export function success<T>(data: T): ApiResponse<T> {
  return {
    status: 'success',
    data,
    error: null,
  };
}

export function failure(code: string, message: string): ApiResponse<never> {
  return {
    status: 'failure',
    data: null,
    error: { code, message },
  };
}
