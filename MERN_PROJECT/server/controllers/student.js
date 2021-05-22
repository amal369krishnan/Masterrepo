const { response, request } = require("express");
const model = require("../models/modelSchema");

const getStudents = async (request, response) => {
	try {
		const result = await model.find({});
		response.status(200).json(result);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const createStudents = async (request, response) => {
	const data = new model(request.body);
	try {
		const result = await data.save();
		response.status(201).json(result);
	} catch (error) {
		response.status(404).json({ message: error.message });
	}
};

const updateStudents = async (request, response) => {
	const record = await model.findById(request.body.data._id);
	record[request.body.item] = request.body.data[request.body.item];
	const result = record.save();
	response.status(200).json(result);
};

const deleteStudents = async (request, response) => {
	const result = await model.deleteOne({ _id: request.params.id });
	response.status(200).json(result);
};
module.exports = {
	getStudents,
	createStudents,
	deleteStudents,
	updateStudents,
};
