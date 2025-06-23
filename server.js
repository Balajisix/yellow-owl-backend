const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bodyParser = require('body-parser')
require('dotenv').config();
connectDB();
const app = express();

const todoRoute = require('./routes/todoRoutes')

app.use(express.json());
app.use(bodyParser.json());

app.use(
  cors({
    origin: 'https://task-planner-balaji.vercel.app',
    methods: ["GET", "POST", "PUT", "DELETE"]
  })
)

app.use('/api', todoRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})