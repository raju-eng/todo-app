const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://mongo:27017/todos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const TodoSchema = new mongoose.Schema({ text: String });
const Todo = mongoose.model('Todo', TodoSchema);

app.use(express.json());

app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/todos', async (req, res) => {
  const todo = new Todo({ text: req.body.text });
  await todo.save();
  res.json(todo);
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));