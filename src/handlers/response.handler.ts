class APIResponse {
  public status: number;
  public message: string;
  public success: boolean;
  public data?: any;

  constructor({
    message = "Success",
    status = 200,
    data,
  }: APIResponseHandlerInterface) {
    this.message = message;
    this.status = status;
    this.success = true;
    if (data) this.data = data;
  }
}

export default APIResponse;
