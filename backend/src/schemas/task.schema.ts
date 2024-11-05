import { model, Schema } from "mongoose";
import { ITask, Priority } from "@types";

const taskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: false,
    unique: true,
  },
  priority: {
    type: String,
    required: true,
    enum: Priority,
    default: Priority.EASY,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  userId: {
    type: String,
    required: true,
    index: true,
    ref: "User",
  },
});

const Task = model("Task", taskSchema);
export default Task;
