import { Roles, Status } from "@types";
import AppError from "@utils/appError.utils";
import { NextFunction, Request, Response } from "express";

export default function allow(...roles: Roles[]) {
  return function (req: Request, _res: Response, next: NextFunction) {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          401,
          Status.FAIL,
          "Not allowed to access with current role"
        )
      );
    }
    next();
  };
}
