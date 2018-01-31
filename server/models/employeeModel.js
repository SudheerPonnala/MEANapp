const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const emoployeeSchema = new Schema({
	name: String,
	age: Number,
	dept: String
});

module.exports = mongoose.model('employeeModel',emoployeeSchema,'employee');