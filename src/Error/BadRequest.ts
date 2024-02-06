export default class BadRequest extends Error {
  statusCode: number;

  constructor() {
    super("Bad Request");
    this.statusCode = 400;
    this.name = 'Response Error';
  }
}
