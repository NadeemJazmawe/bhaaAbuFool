require('dotenv').config();

const express = require('express');
const app = express();



app.use(express.static("client/build"));
app.use(express.json());



const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL || "mongodb://localhost/bahaa" ;
mongoose.connect(DB_URL)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. ${err}`);
    })

mongoose.Promise = global.Promise;


const cookieParser = require('cookie-parser');
app.use(cookieParser())

var cors = require('cors');
app.use(cors(
    {
      origin: 'http://localhost:3000',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }
  ));

const UserRouter = require('./routers/userRouter');
app.use("/user", UserRouter);

const ClientRouter = require('./routers/clientRouter');
app.use("/client", ClientRouter);

const listemRouter = require('./routers/listemRouter');
app.use("/blistem", listemRouter);

const reqRouter = require('./routers/reqRouter');
app.use("/requirement", reqRouter);

const dataRouter = require('./routers/dataRouter');
app.use("/getdata", dataRouter);


const path = require('path');
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

port = process.env.PORT  || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port} 🔥`)
})
