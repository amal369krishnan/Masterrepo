const express = require("express");
const router = express.Router();
const {
	getStudents,
	createStudents,
	deleteStudents,
	updateStudents,
} = require("../controllers/student");

router.get("/", getStudents);
router.post("/", createStudents);
router.put("/update", updateStudents);
router.delete("/delete/:id", deleteStudents);

module.exports = router;
