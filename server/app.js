const express = require("express");
const cors = require("cors");

const diaryRoutes = require("./routes/diaryRoutes");

const app = express();

//Routes Import
app.use(cors());
app.use(express.json());

// Router connect to app
app.use("/entries", diaryRoutes);

module.exports = app;