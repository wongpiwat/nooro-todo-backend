import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import taskRoute from "./routes/task.route";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("🚀 Welcome to the Todo App APIs!");
});

app.use("/tasks", taskRoute);

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});
