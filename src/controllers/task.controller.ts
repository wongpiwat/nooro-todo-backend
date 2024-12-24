import taskService from "../services/task.service";
import ShortUniqueId from "short-unique-id";

const getTasks = async (req, res, next) => {
  try {
    const tasks = await taskService.getAll();

    // Sort tasks by timestamp in descending order
    const sortedTasks = tasks.sort((a, b) => {
      const aDate = new Date(a.timestamps);
      const bDate = new Date(b.timestamps);
      return bDate.getTime() - aDate.getTime();
    });

    res.json(sortedTasks);
  } catch (err) {
    console.error(`[Error] getTasks:`, err);
    next(err);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await taskService.getById(id);
    res.json(task);
  } catch (err) {
    console.error(`[Error] getTaskById:`, err);
    next(err);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { title, color } = req.body;
    const { randomUUID } = new ShortUniqueId({ length: 10 });
    const id = randomUUID();

    const result = await taskService.create(id, title, color);
    res.json(result);
  } catch (err) {
    console.error(`[Error] createTask:`, err);
    next(err);
  }
};

const updateTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, color, status } = req.body;
    const result = await taskService.update(id, title, color, status);
    res.json(result);
  } catch (err) {
    console.error(`[Error] updateTaskById:`, err);
    next(err);
  }
};

const deleteTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await taskService.remove(id);
    res.json(result);
  } catch (err) {
    console.error(`[Error] deleteTaskById:`, err);
    next(err);
  }
};

export default {
  getTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
};
