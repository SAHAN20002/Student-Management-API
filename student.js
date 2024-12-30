const mongoose = require('mongoose');
const { add } = require('mongoose/lib/helpers/specialProperties');

const studentSchema = new mongoose.Schema({
  StudentId: { type: String, required: true, unique: true },
  StudentFName: { type: String, required: true },
  StudentLName: { type: String, required: true },
  StudentEmail: { type: String, required: true },
  StudentCity: { type: String, required: true },
  StudentGurading: { type: String },
  ProgramSelect: { type: String, required: true },
  SubjectArry: { type: Array, required: true }
});

module.exports = mongoose.model('student', studentSchema);