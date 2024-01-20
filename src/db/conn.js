const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Students-api")
    .then(() => console.log("connection is eastablish"))
    .catch((e) => console.log("No Connection"))