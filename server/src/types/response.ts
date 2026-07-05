type ResponseError = {
  code: string,
  message: string
}

type SuccessResponse<T> = {
  status: "success",
  data: T,
  error: null
}

type ErrorResponse = {
  status: "error",
  data: null,
  error: ResponseError
}

type ApiResponse<T> = 
  | SuccessResponse<T>
  | ErrorResponse