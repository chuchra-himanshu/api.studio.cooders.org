class APIError extends Error {
  public status: number;
  public success: boolean;
  public data?: any;

  constructor({
    message = "Internal Server Error!",
    status = 500,
    data,
  }: APIErrorHandlerInterface) {
    super(message);
    this.message = message;
    this.status = status;
    this.success = false;
    if (data) this.data = data;
    this.stack = String(Error.captureStackTrace(this, this.constructor));
  }
}

export default APIError;
