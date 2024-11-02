import { model, Schema } from "mongoose";
import { IUser, Roles } from "@types";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password length should be more than 8 characters"],
    maxLength: [32, "Password length should not be more than 32 characters"],
  },
  role: {
    type: String,
    required: true,
    enum: Roles,
    default: Roles.USER,
  },
});

const User = model("User", userSchema);
export default User;
