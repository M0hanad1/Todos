import { config } from "dotenv";

config();

export const DBURL = process.env.DBURL || "";
export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || 3000;
