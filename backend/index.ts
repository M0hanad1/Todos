import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
  res.json({ message: "Hello Worlds" });
});
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
