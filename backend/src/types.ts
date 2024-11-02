import { Document } from "mongoose";

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

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: Roles;
}

export interface ITask extends Document {
  title: string;
  description?: string;
  priority: Priority;
  completed: boolean;
}
