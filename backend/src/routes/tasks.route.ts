import { createTask, getTask } from "@controllers/tasks.controller";
import allow from "@middlewares/allow.middleware";
import auth from "@middlewares/auth.middleware";
import wrapAsync from "@middlewares/wrapAsync.middleware";
import { Roles } from "@types";
import { Router } from "express";

const tasksRouter = Router();
tasksRouter.route("/:id").get(auth, allow(Roles.ADMIN), wrapAsync(getTask));
tasksRouter.route("/create").post(auth, wrapAsync(createTask));

export default tasksRouter;
