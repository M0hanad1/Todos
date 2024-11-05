import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { PORT } from "@config/variables";
import connect from "@config/database";
import usersRouter from "@routes/users.route";
import tasksRouter from "@routes/tasks.route";
import { Status } from "@types";
import AppError from "@utils/appError.utils";

const app = express();
const port = PORT;

connect();

app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);
app.use("/api/tasks", tasksRouter);
app.all("/api/*", (_req, res) => {
  res.status(404).json({
    status: Status.FAIL,
    message: "Page is not found",
  });
});
app.use(
  (
    err: AppError | Error,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) => {
    const isInstance = err instanceof AppError;
    res.status(isInstance ? err.code : 500).json({
      status: isInstance ? err.status : Status.ERROR,
      message: err.message,
    });
  }
);

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
