const express = require("express");
const router = express.Router();
const Todo = require("../models/Todos");

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

router.get("/:id", async (req, res) => {
  const todo = await Todo.findById({
    _id: req.params.id,
  });

  res.json(todo);
});

router.get("/remove/:id", async (req, res) => {
  const todo = await Todo.findByIdAndDelete({
    _id: req.params.id,
  });

  res.json(todo);
});

router.post("/create", async (req, res) => {
  const createdTodo = new Todo(req.body);

  const savedTodo = await createdTodo.save();
  res.json(savedTodo);
});

router.put("/update/:id", async (req, res) => {
  const updatedTodo = await Todo.updateOne(
    {
      _id: req.params.id,
    },
    {
      content: "Manger des chips salés au sel",
      author: "Billy",
    }
  );

  res.json(updatedTodo);
});

module.exports = router;
