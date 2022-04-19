require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');
const DB_URL = "mongodb://localhost/bahaa" ; //process.env.DB_URL;
console.log(process.env.DB_URL);
mongoose.connect(DB_URL);
mongoose.Promise = global.Promise;

const userRouters = require('./routers/userRouter');
app.use("/user", userRouters);

const reqRouter = require('./routers/reqRouter')
app.use("/requirement", reqRouter);

port = process.env.port || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`)
})