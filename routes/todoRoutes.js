const todoController = require('../controllers/todoController');
const express = require('express');
const router = express.Router();

router.post('/newtodo', todoController.newTodo);
router.get('/get-todo', todoController.getTodo);
router.put('/update-todo/:id', todoController.updateTodo);
router.delete('/delete-todo/:id', todoController.deleteTodo);

module.exports = router;