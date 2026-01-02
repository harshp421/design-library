export class CustomError extends Error {
  statusCode: number;
  message: string;
  requestId?: string;
  userMessage?: string;

  constructor(
    statusCode: number,
    message: string,
    requestId?: string,
    userMessage?: string
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.requestId = requestId;
    this.userMessage = userMessage;
  }

  toString() {
    return `Error: ${this.statusCode} - ${this.message}${
      this.requestId ? ` (Request ID: ${this.requestId})` : ""
    }`;
  }
}
