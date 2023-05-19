
const express = require("express");
const app = express();
const crypto = require("crypto");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const PORT=8080;
const mongoose = require('mongoose');
//data




mongoose.connect('mongodb+srv://ilaha:ilaha2002@database.jbmanhz.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected!'));
const studentSchema = new mongoose.Schema({
  name: String,
  imageURL:String,
  pozition:String
});

const StudentModel = mongoose.model('Students',studentSchema);

//get All Student
app.get("/api/students",async (req, res) => {
    const { name } = req.query;
    const students = await StudentModel.find();
    if (name === undefined) {
      res.status(200).send({
        data: students,
      });
    } else {
      res.status(200).send({
        data: students.filter(
          (x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        ),
        message: "data get success!",
      });
    }
  });
  //get Students by ID
  app.get("/api/students/:id",async (req, res) => {
    const id = req.params.id;
    const student = await StudentModel.findById(id);
 
    if (!student) {
      res.status(204).send("student not found!");
    } else {
      res.status(200).send({
        data: student,
        message: "data get success!",
      });
    }
  });
  //delete student by ID
  app.delete("/api/students/:id", async (req, res) => {
    const id = req.params.id;
    const student = await StudentModel.findByIdAndDelete(id);
    if (student === undefined) {
      res.status(404).send("student not found");
    } else {
      const idx = fakeData.indexOf(student);
      fakeData.splice(idx, 1);
      res.status(203).send({
        data: student,
        message: "student deleted successfully",
      });
    }
  });
  //post
  app.post("/api/students", async(req, res) => {
    const { name, imageURL, pozition} = req.body;
    const newStudent =new StudentModel( {
        name: String,
        imageURL:String,
        pozition:String
    });
    await newStudent.save();
    res.status(201).send("created");
  });
  //put
  app.put("/api/students/:id", (req, res) => {
    const id = req.params.id;
    const { name, imageURL, pozition } = req.body;
    const existedStudent = fakeData.find((x) => x.id == id);
    if (existedStudent == undefined) {
      res.status(404).send("student not found!");
    } else {
      if (name) {
        existedStudent.name = name;
      }
      if (imageURL) {
        existedStudent.imageURL = imageURL;
      }
      if (pozition) {
        existedStudent.pozition = pozition;
      }
      res.status(200).send(`student: ${existedStudent.name}`);
    }
  });

  app.listen(PORT, () => {
      console.log(`NODE APP listening on port ${PORT}`);
  });