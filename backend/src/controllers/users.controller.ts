import User from "@schemas/user.schema";
import { Status } from "@types";
import AppError from "@utils/appError.utils";
import createUserToken from "@utils/createUserToken.utils";
import { compare, hash } from "bcrypt";
import { NextFunction, Request, Response } from "express";

export async function signup(req: Request, res: Response, next: NextFunction) {
  const { name, email, password, role } = req.body;
  if (await User.findOne({ email })) {
    return next(new AppError(409, Status.ERROR, "Email is already used"));
  }
  const newUser = await User.create({
    name,
    email,
    password: await hash(password, 10),
    role,
  });
  await newUser.save();
  res.status(201).json({
    status: Status.SUCCESS,
    data: {
      token: createUserToken({ email, role, id: newUser._id }),
    },
  });
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await compare(password, user.password))) {
    return next(new AppError(401, Status.ERROR, "Wrong email or password"));
  }
  res.status(201).json({
    status: Status.SUCCESS,
    data: {
      token: createUserToken({ email, role: user.role, id: user._id }),
    },
  });
}
