import { JWT_SECRET } from "@config/variables";
import { IReqUser, Status } from "@types";
import AppError from "@utils/appError.utils";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export default function auth(req: Request, _res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token) {
    return next(new AppError(401, Status.ERROR, "Token is required"));
  }
  try {
    const currentUser = verify(token, JWT_SECRET) as IReqUser;
    req.user = currentUser;
    next();
  } catch {
    return next(new AppError(401, Status.ERROR, "Invalid Token"));
  }
}
