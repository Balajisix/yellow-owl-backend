const Todo = require('../models/Todo');

const newTodo = async (req, res) => {
  const { title, description, category, priority } = req.body;
  const todo = new Todo({ title, description, category, priority });
  try {
    await todo.save();
    res.status(201).json(todo);
  } catch (e) {
    res.status(500).json({ message: 'Error Creating Todo', error: e.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit
    const todos = await Todo.find().skip(skip).limit(limit);
    const total = await Todo.countDocuments();
    res.status(200).json({
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      data: todos
    });
  } catch (e) {
    res.status(500).json({ message: 'Error Fetching Todos', error: e.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (e) {
    res.status(500).json({ message: 'Error Updating Todo', error: e.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (e) {
    res.status(500).json({ message: 'Error Deleting Todo', error: e.message });
  }
};

module.exports = { newTodo, getTodo, updateTodo, deleteTodo };