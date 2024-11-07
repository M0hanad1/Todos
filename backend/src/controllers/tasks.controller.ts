import Task from "@schemas/task.schema";
import { ITask, Status } from "@types";
import AppError from "@utils/appError.utils";
import { NextFunction, Request, Response } from "express";

export async function getTask(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  const taskNotFound = new AppError(404, Status.FAIL, "Task is not found");
  try {
    const task = await Task.findOne({ _id: id }, { __v: false });
    if (!task) {
      return next(taskNotFound);
    }
    res.json({ status: Status.SUCCESS, data: { task: task } });
  } catch {
    next(taskNotFound);
  }
}

export async function createTask(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { title, description, priority, completed }: ITask = req.body;
  const newTask = new Task({
    title,
    description,
    priority,
    completed,
    user: req.user.id,
  });
  const user = await newTask.populate({
    path: "user",
    select: ["name", "email", "id"],
  });
  if (!user.user) {
    return next(new AppError(401, Status.FAIL, "Invalid user"));
  }
  await newTask.save();
  res.status(201).json({
    status: Status.SUCCESS,
    data: {
      user: user.user,
      task: newTask.id,
    },
  });
}
