import allow from "@middlewares/allow.middleware";
import auth from "@middlewares/auth.middleware";
import { Roles } from "@types";
import { Router } from "express";

const usersRouter = Router();
usersRouter.route("/").get(auth, allow(Roles.ADMIN), (_req, res) => {
  res.json({ message: "This is the users route" });
});

export default usersRouter;
