import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import taskRoute from "./routes/task.route";

dotenv.config();

const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("🚀 Welcome to the Todo App APIs!");
});

app.use("/api/v1/tasks", taskRoute);

app.use((_, res) => {
  res.status(404).send("🚫 404, Server Not Found");
});

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});
