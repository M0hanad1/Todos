import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { PORT } from "@config/variables";
import connect from "@config/database";
import usersRouter from "@routes/users.route";
import tasksRouter from "@routes/tasks.route";
import { Status } from "@types";

const app = express();
const port = PORT;

connect();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Hello Worlds" });
});
app.use("/users", usersRouter);
app.use("/tasks", tasksRouter);
app.all("/*", (_req, res) => {
  res.status(404).json({
    status: Status.FAIL,
    message: "Page is not found",
  });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    status: Status.ERROR,
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
