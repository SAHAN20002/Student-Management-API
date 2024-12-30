/* Creta Api */
let express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./studentRouter");
const cors = require("cors");

const PORT = process.env.PORT;
const MONGO_URI = process.env.Mongo_URL;

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/students", router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// // Create a new student
// app.post("/students", async (req, res) => {
//   try {
//     const newStudent = new Student(req.body);
//     await newStudent.save();
//     res.json({ message: "Student added successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Get all students
// app.get("/students", async (req, res) => {
//   try {
//     const students = await Student.find();
//     res.json(students);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Get a student by search criteria
// app.get("/students/:searchCriteria/:searchInput", async (req, res) => {
//   const { searchCriteria, searchInput } = req.params;

//   const searchCriteriaMapping = {
//     id: "StudentId",
//     firstName: "StudentFName",
//     lastName: "StudentLName",
//     email: "StudentEmail",
//     city: "StudentCity",
//     guardingName: "StudentGurading",
//   };

//   const validSearchCriteria = searchCriteriaMapping[searchCriteria];

//   if (!validSearchCriteria) {
//     return res.status(400).json({ error: "Invalid search criteria" });
//   }

//   try {
//     const query = { [validSearchCriteria]: new RegExp(`^${searchInput}$`, "i") };
//     const students = await Student.find(query); // Use `find` instead of `findOne`

//     if (students.length > 0) {
//       res.json(students); // Return all matching students
//     } else {
//       res.status(404).json({ error: "No students found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Get students by course type
// app.get("/students/:courseType", async (req, res) => {
//   const { courseType } = req.params;

//   try {
//     const students = await Student.find({
//       ProgramSelect: new RegExp(`^${courseType}$`, "i"),
//     });
//     res.json(students);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Update a student
// app.put("/students/update", async (req, res) => {
//   const updatedStudent = req.body;

//   try {
//     const student = await Student.findOneAndUpdate(
//       { StudentId: updatedStudent.StudentId },
//       updatedStudent,
//       { new: true }
//     );

//     if (student) {
//       res.json({ message: "Student updated successfully", student });
//     } else {
//       res.status(404).json({ error: "Student not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });

// // Delete a student
// app.delete("/delete/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const student = await Student.findOneAndDelete({ StudentId: id });

//     if (student) {
//       res.json({ message: "Student deleted successfully", student });
//     } else {
//       res.status(404).json({ message: "Student not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });
