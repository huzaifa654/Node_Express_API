const express = require('express');
const router = new express.Router();
const Student = require("../models/students")

router.post("/students", (req, res) => {
    console.log(req.body)
    const user = new Student(req.body)
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e)
    })
})

router.get("/students", async (req, res) => {
    try {
        const studentData = await Student.find();
        res.send(studentData)
    } catch (error) {
        res.send(error)
    }

})
//get individula student data


router.get("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const StudentData = await Student.findById(_id)
        console.log(StudentData)
        if (!StudentData) {
            res.status(404).send()
        } else {
            res.send(StudentData)
        }

    }
    catch (error) {
        res.status(404).send(error)
    }

})

//delete student by id
router.delete("/students/:id", async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            res.status(404).send("Id not Found")
        } else {
            res.send(deleteStudent)
        }
    } catch (error) {
        res.status(404).send(error)
    }

})

//update the students by its id
router.patch("/students/:id", async (req, res) => {
    try {
        const updateStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        console.log("-------------", updateStudent)

        if (!req.params.id) {
            res.status(404).send("Id not Found")
        } else {
            res.send(updateStudent)
        }
    } catch (error) {
        res.status(404).send(error)
        console.log("error-----------", error)
    }

})



module.exports = router