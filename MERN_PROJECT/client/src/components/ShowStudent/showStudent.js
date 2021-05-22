import React, { useState, useEffect } from "react";
import axios from "axios";

function showStudent(props) {
	const [container, setContainer] = useState([]);
	const [trigger, setTrigger] = useState({});
	/*For triggering */
	props.io.on("trigger", (data) => {
		setTrigger(data);
	});

	/*For Deletion operation */
	const handleDeletion = (e) => {
		console.log(e);
		axios
			.delete("http://localhost:8080/student/delete/" + e)
			.then((res) => {
				props.io.emit("message", res);
			});
		return trigger;
	};

	/*For Updation operation */
	const handleEdit = (e) => {
		console.log(e);
		const inputFormatter = () => {
			const input = prompt("Which one did you need to update?", "eg. Name");
			console.log(input);
			if (input !== null) {
				input.toLowerCase();
			}
			return input;
		};
		const input = inputFormatter();
		let record;
		switch (input) {
			case "name":
				record = prompt("Enter the name", e.name);
				e.name = record;
				break;

			case "section":
				record = prompt("Enter the section", e.section);
				e.section = record;
				break;

			case "gender":
				record = prompt("Enter the gender", e.gender);
				e.gender = record;
				break;

			case "rollno":
				record = prompt("Enter the rollno", e.rollno);
				e.rollno = record;
				break;

			case "grade":
				record = prompt("Enter the grade", e.grade);
				e.grade = record;
				break;

			case "subject":
				record = prompt("Enter the Subject", e.subject);
				e.subject = record;
				break;

			default:
				alert("Wrong Input");
				inputFormatter();
				break;
		}
		axios
			.put("http://localhost:8080/student/update", { data: e, item: input })
			.then((res) => {
				props.io.emit("message", res);
			});
		return trigger;
	};

	useEffect(() => {
		axios.get("http://localhost:8080/student/").then((res) => {
			setContainer(
				res.data.map((v, k) => {
					const { _id, name, section, gender, rollno, grade, subject } = v;
					return (
						<tr key={_id}>
							<td onClick={() => handleEdit(v)}>{name}</td>
							<td onClick={() => handleEdit(v)}>{section}</td>
							<td onClick={() => handleEdit(v)}>{gender}</td>
							<td onClick={() => handleEdit(v)}>{rollno}</td>
							<td onClick={() => handleEdit(v)}>{grade}</td>
							<td onClick={() => handleEdit(v)}>{subject}</td>
							<td>
								<button
									onClick={() => {
										handleDeletion(_id);
									}}
								>
									Submit
								</button>
							</td>
						</tr>
					);
				})
			);
		});
	}, [trigger]);
	return (
		<div className="container-fluid">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Section</th>
						<th>Gender</th>
						<th>Roll No</th>
						<th>Grade</th>
						<th>Subject</th>
					</tr>
				</thead>
				<tbody>{container}</tbody>
			</table>
		</div>
	);
}
export default showStudent;
