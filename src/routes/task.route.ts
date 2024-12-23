import express from "express";

const router = express.Router();

import taskController from "../controllers/task.controller";

/* GET Tasks */
router.get("/", taskController.getTasks);

/* GET Task by id */
router.get("/:id", taskController.getTaskById);

/* POST Task */
router.post("/", taskController.createTask);

/* PUT Task */
router.put("/:id", taskController.updateTaskById);

/* DELETE Task */
router.delete("/:id", taskController.deleteTaskById);

export default router;
