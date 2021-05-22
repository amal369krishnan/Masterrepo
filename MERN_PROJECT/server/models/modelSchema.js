const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
	name: String,
	rollno: Number,
	gender: String,
	grade: String,
	section: {
		type: String,
		default: "A+",
	},
	subject: [],
});

const student = mongoose.model("student", studentSchema);
module.exports = student;
