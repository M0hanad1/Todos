import { IReqUser } from "@types";

declare global {
  namespace Express {
    interface Request {
      user: IReqUser;
    }
  }
}
