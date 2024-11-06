import { login, signup } from "@controllers/users.controller";
import wrapAsync from "@middlewares/wrapAsync.middleware";
import { Router } from "express";

const usersRouter = Router();
usersRouter.route("/signup").post(wrapAsync(signup));
usersRouter.route("/login").post(wrapAsync(login));

export default usersRouter;
