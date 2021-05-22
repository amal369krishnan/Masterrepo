import React, { useState } from "react";
import axios from "axios";

const createStudent = (props) => {
	const [form, setForm] = useState({
		name: "",
		grade: "",
		gender: "",
		rollno: "",
		section: "",
		subject: [],
	});
	const [subject, setSubject] = useState([]);
	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		const checked = e.target.checked;

		setForm({ ...form, [name]: value });

		if (
			(value === "chemistry" || value === "biology" || value === "maths") &&
			checked === true
		) {
			setSubject([...subject, value]);
		} else if (
			(value === "chemistry" || value === "biology" || value === "maths") &&
			checked === false
		) {
			const arr = subject.filter((item) => {
				return item != value;
			});
			setSubject(arr);
		}
	};
	const submitForm = (e) => {
		e.preventDefault();
		form.subject = subject;
		axios.post("http://localhost:8080/student/", form).then((res) => {
			props.io.emit("message", res);
		});
	};
	return (
		<form onSubmit={submitForm}>
			<div>
				<label> Full Name </label>
				<input
					type="text"
					name="name"
					value={form.name}
					onChange={handleInput}
					size="15"
					required
				/>
				<br /> <br />
				<label>Section :</label>
				<select onChange={handleInput} name="section" required>
					<option value="A">A</option>
					<option value="B">B</option>
					<option value="C">C</option>
					<option value="D">D</option>
					<option value="E">E</option>
					<option value="F">F</option>
				</select>
				<br />
				<br />
				<label>Gender :</label>
				<br />
				<input
					type="radio"
					value="male"
					name="gender"
					onChange={handleInput}
					required
				/>
				Male
				<input
					type="radio"
					value="female"
					name="gender"
					onChange={handleInput}
				/>
				Female
				<input
					type="radio"
					value="other"
					name="gender"
					onChange={handleInput}
					required
				/>
				Other
				<br />
				<br />
				Roll No:
				<input
					type="text"
					id="rollno"
					name="rollno"
					value={form.rollno}
					onChange={handleInput}
					required
				/>
				<br />
				<br /> <br />
				Grade:
				<input
					type="text"
					id="grade"
					name="grade"
					onChange={handleInput}
					value={form.grade}
					required
				/>
				<br />
				<br /> <br />
				<label>Subject :</label>
				<input
					type="checkbox"
					id="chemistry"
					name="subject"
					value="chemistry"
					onChange={handleInput}
				/>
				<label htmlFor="chemistry"> Chemistry</label>
				<input
					type="checkbox"
					id="biology"
					name="subject"
					value="biology"
					onChange={handleInput}
				/>
				<label htmlFor="biology"> Biology</label>
				<input
					type="checkbox"
					id="maths"
					name="subject"
					value="maths"
					onChange={handleInput}
				/>
				<label htmlFor="maths"> Mathematics</label>
				<br />
				<br />
				<br />
				<button>Submit</button>
			</div>
		</form>
	);
};

export default createStudent;
