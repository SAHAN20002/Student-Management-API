// Create a new student
app.post("/studentcreat", async (req, res) => {
    try {
      const newStudent = new Student(req.body);
      await newStudent.save();
      res.json({ message: "Student added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  // Get all students
app.get("/showAll", async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  // Get a student by search criteria
app.get("/search/:searchCriteria/:searchInput", async (req, res) => {
    const { searchCriteria, searchInput } = req.params;
  
    const searchCriteriaMapping = {
      id: "StudentId",
      firstName: "StudentFName",
      lastName: "StudentLName",
      email: "StudentEmail",
      city: "StudentCity",
      guardingName: "StudentGurading",
    };
  
    const validSearchCriteria = searchCriteriaMapping[searchCriteria];
  
    if (!validSearchCriteria) {
      return res.status(400).json({ error: "Invalid search criteria" });
    }
  
    try {
      const query = { [validSearchCriteria]: new RegExp(`^${searchInput}$`, "i") };
      const students = await Student.find(query); // Use `find` instead of `findOne`
  
      if (students.length > 0) {
        res.json(students); // Return all matching students
      } else {
        res.status(404).json({ error: "No students found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.get("/search/:courseType", async (req, res) => {
    const { courseType } = req.params;
  
    try {
      const students = await Student.find({
        ProgramSelect: new RegExp(`^${courseType}$`, "i"),
      });
      res.json(students);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  // Update a student
app.put("/update", async (req, res) => {
    const updatedStudent = req.body;
  
    try {
      const student = await Student.findOneAndUpdate(
        { StudentId: updatedStudent.StudentId },
        updatedStudent,
        { new: true }
      );
  
      if (student) {
        res.json({ message: "Student updated successfully", student });
      } else {
        res.status(404).json({ error: "Student not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });