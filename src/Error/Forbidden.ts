export default class Forbidden extends Error {
  statusCode: number;

  constructor() {
    super("Forbidden");
    this.statusCode = 401;
    this.name = "Forbidden"
  }
}
