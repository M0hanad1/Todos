import { Status } from "@types";

export default class AppError extends Error {
  status: Status;
  code: number;

  constructor(
    code: number = 400,
    status: Status = Status.FAIL,
    message: string = "Something went wrong"
  ) {
    super();
    this.code = code;
    this.status = status;
    this.message = message;
  }
}
