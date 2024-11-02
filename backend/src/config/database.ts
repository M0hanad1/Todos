import mongoose from "mongoose";
import { DBURL } from "./variables";

export default async function connect() {
  try {
    await mongoose.connect(DBURL);
    console.log("Connected to database");
  } catch (err) {
    console.error(err instanceof Error ? err.message : "Something went wrong!");
  }
}
