export const success = <T>(data: T): SuccessResponse<T> => ({
  status: "success",
  data: data,
  error: null
})

export const error = (error: ResponseError): ErrorResponse => ({
  status: "error",
  data: null,
  error
})