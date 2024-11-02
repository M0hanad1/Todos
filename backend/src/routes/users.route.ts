import { Router } from "express";

const usersRouter = Router();
usersRouter.get("/", (_req, res) => {
  res.json({ message: "This is the users route" });
});

export default usersRouter;
