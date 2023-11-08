import { Router } from "express";

import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  toggleDone,
} from "../controllers/tasks.controller";

const router = Router();

// get
router.get("/", renderTasks);
router.get("/tasks/:id/edit", renderTaskEdit);
router.get("/tasks/:id/delete", deleteTask);
router.get("/tasks/:id/toggleDone", toggleDone);

// post
router.post("/tasks/add", createTask);
router.post("/tasks/:id/edit", editTask);


export default router;
