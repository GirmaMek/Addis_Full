const { json } = require('express');
const express = require('express');
const dbconfig = require('./config/dbconfig');
const app = express();
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 4000;
// app.use(express.json()); 
const songRoute = require('./routes/songRoute');
// app.use('/songs',songRoute);
app.use(cors());
app.use(express.json());
app.use('/songs',songRoute)

app.listen(port, () => {
  dbconfig
  console.log(`Listening on port ${port}`);
});

