import { Router } from "express";

const tasksRouter = Router();
tasksRouter.get("/", (_req, res) => {
  res.json({ message: "This is the tasks route" });
});

export default tasksRouter;
