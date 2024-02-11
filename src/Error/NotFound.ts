export default class NotFound extends Error {
  statusCode: number;

  constructor() {
    super("Not Found");
    this.statusCode = 404;
    this.name = "Not Found"
  }
}
