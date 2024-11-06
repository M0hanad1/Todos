import { Types } from "mongoose";

export interface IReqUser {
  id: Types.ObjectId;
  role: Roles;
  email: string;
}

export enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum Priority {
  HARD = "HARD",
  NORMAL = "NORMAL",
  EASY = "EASY",
}

export enum Status {
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  ERROR = "ERROR",
}

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: Roles;
}

export interface ITask {
  title: string;
  description?: string;
  priority: Priority;
  completed: boolean;
  userId: string;
}
