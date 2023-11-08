"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks.controller");
var router = (0, _express.Router)();

// get
router.get("/", _tasks.renderTasks);
router.get("/tasks/:id/edit", _tasks.renderTaskEdit);
router.get("/tasks/:id/delete", _tasks.deleteTask);
router.get("/tasks/:id/toggleDone", _tasks.toggleDone);

// post
router.post("/tasks/add", _tasks.createTask);
router.post("/tasks/:id/edit", _tasks.editTask);
var _default = exports["default"] = router;