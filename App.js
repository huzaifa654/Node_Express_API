const express = require('express');
const StudentRouter = require('./src/Router/router')
require("./src/db/conn");
const app = express();
const port = process.env.PORT || 8000
app.use(express.json())
app.use(StudentRouter)
app.listen(port, () => {
    console.log(`Connection is setup at ${port}`)
})
