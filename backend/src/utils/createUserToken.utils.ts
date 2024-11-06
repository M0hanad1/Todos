import { JWT_SECRET } from "@config/variables";
import { IReqUser } from "@types";
import { sign } from "jsonwebtoken";

export default function createUserToken({ email, role, id }: IReqUser) {
  return sign({ email, role, id }, JWT_SECRET);
}
