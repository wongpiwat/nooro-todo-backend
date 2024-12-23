import express from "express";
import dotenv from "dotenv";
import { Prisma, PrismaClient } from "@prisma/client";
import ShortUniqueId from "short-unique-id";

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;

const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Get all tasks
app.get("/tasks", async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

// Get a task by id
app.get("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const task = await prisma.task.findUnique({
    where: { id: id },
  });
  res.json(task);
});

// Create a new task
app.post("/tasks", async (req, res) => {
  const { title, color } = req.body;
  const { randomUUID } = new ShortUniqueId({ length: 10 });
  const task = await prisma.task.create({
    data: {
      id: randomUUID(),
      title: title,
      color: color,
      status: false,
      timestamps: new Date(),
    },
  });
  res.json(task);
});

// Update a task
app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { title, color } = req.body;
  const task = await prisma.task.update({
    where: { id: id },
    data: {
      title,
      color,
    },
  });
  res.json(task);
});

// Delete a task
app.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const task = await prisma.task.delete({
    where: { id: id },
  });
  res.json(task);
});

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});
