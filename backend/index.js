const express = require('express');
const connect = require('./db.js');
const cors = require('cors');
const dotenv = require('dotenv');

connect();

const TodoListsRouter = require('./Router/TodoListRouter.js');

const port = process.env.PORT || 5000;
const app = express();
dotenv.config();
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/todo', TodoListsRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
