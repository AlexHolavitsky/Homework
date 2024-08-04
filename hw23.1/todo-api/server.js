// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');//

const mongoDbURL = 'mongodb+srv://alex65870:frontendpro2024@cluster0.sr2c04u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose
    .connect(mongoDbURL)
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((error)=>{
        console.log(error);
    });

const db = mongoose.connection;
db.on('error', ()=>console.log('error when connect to db'));
db.once('open', ()=> console.log("Successfully connected to db"));


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let todos = [];

// Create
app.post('/api/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Read
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// Update
app.put('/api/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const updatedTask = req.body.task;
  const todo = todos.find(t => t.id === todoId);
  
  if (todo) {
    todo.task = updatedTask;
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// Delete
app.delete('/api/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === todoId);

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/todos`);
});
