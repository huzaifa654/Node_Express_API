const mongoose = require("mongoose")
const validate = require("validator")
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenth: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is already present"],
        validate(value) {
            if (!validate.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
})
//we will create a new collection
const Student = new mongoose.model('Student', studentSchema)
module.exports = Student