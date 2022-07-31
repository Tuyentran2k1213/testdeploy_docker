const express = require('express');
const app = express();

app.use(express.json());

const mysql = require("mysql2");
app.listen("8080", () => {
 
})

const rootRouter = require('./routes/index');

app.use("/api",rootRouter);

