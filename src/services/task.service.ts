import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAll = async () => {
  const tasks = await prisma.task.findMany();
  return tasks;
};

const getById = async (id: string) => {
  const task = await prisma.task.findUnique({
    where: { id: id },
  });
  return task;
};

const create = async (id: string, title: string, color: string) => {
  const task = await prisma.task.create({
    data: {
      id: id,
      title: title,
      color: color,
      status: false,
      timestamps: new Date(),
    },
  });
  return task;
};

const update = async (id: string, title: string, color: string, status: boolean) => {
  const task = await prisma.task.update({
    where: { id: id },
    data: {
      title: title,
      color: color,
      status: status,
    },
  });
  return task;
};

const remove = async (id: string) => {
  const task = await prisma.task.delete({
    where: { id: id },
  });
  return task;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
