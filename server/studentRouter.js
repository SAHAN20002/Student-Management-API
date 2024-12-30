const express = require('express');
const router = express.Router();
const studentController = require('./stduntContraoller');

// Create a new student
router.post("/creat", studentController.creatStudent);
router.get("/show", studentController.showAllStudents);
router.get("/search/:searchCriteria/:searchInput", studentController.searchStudent);
router.get("/courseType/:courseType", studentController.getStudentsByCourseType);
router.put("/update/:id", studentController.updateStudent);
router.delete("/delete/:id", studentController.deleteStudent);


module.exports = router;
