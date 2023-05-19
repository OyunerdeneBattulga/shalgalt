const express = require("express");
const router = express.Router();
const {
  getTodoLists,
  isDone,
  createTodoList,
  deleteTodoList,
  updateTodoList,
} = require("../Controller/TodoListController.js");

router

  .post("/add", createTodoList)
  .patch("/count", isDone)
  .get("/", getTodoLists)
  .delete("/delete/:id", deleteTodoList)
  .patch("/update/:id", updateTodoList);
module.exports = router;
