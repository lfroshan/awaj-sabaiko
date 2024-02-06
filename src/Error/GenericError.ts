export default class GenericError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, GenericError.prototype);
  }

  static handle(error: any): GenericError {
    if (error instanceof GenericError) {
      return error;
    }

    const statusCode = error.statusCode || 500; 
    const message = error.message || 'Internal Server Error';

    return new GenericError(statusCode, message);
  }
}
