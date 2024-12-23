import express from "express";
import dotenv from "dotenv";
import { Prisma, PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tasks", async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});
