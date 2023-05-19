const { request, response } = require("express");
const PostModel = require("../Model/TodoListModel.js");

exports.createTodoList = async (request, response, next) => {
  try {
    const createTodoList = await PostModel.create({
      id:request.body.id , 
      list :request.body.list
    });
    response
      .status(201)
      .json({ message: `new TodoList create`, data: createTodoList });
  } catch (error) {
    console.log(error)
    return response.status(400).json({ message: error, data: null });
  }
};

exports.updateTodoList = async (request, response, next) => {
  const { id } = request.params;
  try {
    const TodoList = await PostModel.findByIdAndUpdate(id , {...request.body});
    response.status(200).json({
      message: true,
      data: TodoList,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null});
  }
};

exports.getTodoLists = (request, response, next) => {
  try {
    const lists =  PostModel.find();
    response.status(200).json({
        message: true,
        data: lists,
    });
} catch (error) {
  console.log(error)
    return response.status(400).json({ message: error, data:null });
}
};

exports.isDone = async (request, response, next) => {
  try {
    const count = await PostModel.find({isDone:false}).count();
    response.status(200).json({
        message: true,
        data: count,
    });
} catch (error) {
    return response.status(400).json({ message: error, data:null });
}
};

exports.deleteTodoList = async (request, response) => {
  const id = request.headers.id;
  try {
    const TodoList = await PostModel.findByIdAndDelete(id);
    response.status(200).json({
      message: `TodoList with ${request.params.id} id is delete`,
      data: TodoList,
    });
  } catch (error) {
    response.status(400).json({ message: error, data: null });
  }
};
