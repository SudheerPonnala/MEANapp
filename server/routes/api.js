const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

const employee = require("../models/employeeModel");

// mongoose.promise = global.promise;

mongoose.connect('mongodb://localhost/Company',function(err){
	if(err){
		console.log("error, not connected...");
	}else{
		console.log("connected...");
	}
});

//API to Get all employee details
router.get('/getAllEmployees',function(req,res){
	console.log("retrieving all employees...");
	employee.find({}).
	exec(function(err,data){
		if(err){
			console.log("error retrieving...");
		}else{
			res.json(data);
		}	
	})
});

//API to get employee by id
router.get("/getEmployee/:id",function(req,res){
	console.log("retrieving single employees...");
	employee.findById(req.params.id).
	exec(function(err,data){
		if(err){
			console.log("error retrieving...");
		}else{
			res.json(data);
		}
	})
});

//API to add employee
router.post('/addEmployee',function(req,res){
	console.log("Inserting new employee...");
	var newEmployee = new employee();
	newEmployee.name = req.body.name;
	newEmployee.age = req.body.age;
	newEmployee.dept = req.body.dept;
	newEmployee.save(function(err,insertedEmployee){
		if(err){
			console.log("error while inserting...");
		}else{
			res.json(insertedEmployee);
		}
	});
});

//API to update employee
router.put('/updateEmployee/:id',function(req,res){
	console.log("updating employee details...");
	employee.findByIdAndUpdate(req.params.id,
		{
			$set: {
				name: req.body.name,
				age: req.body.age,
				dept: req.body.dept
			}
		},{
			new: true
		},
		function(err,updatedEmployee){
			if(err){
				console.log("error while updatimg...");
			}else{
				res.json(updatedEmployee);
			}
	});
});

//API to delete employee
router.delete('/deleteEmployee/:id',function(req,res){
	console.log("deleting employee...");
	employee.findByIdAndRemove(req.params.id,function(err, deletedEmployee){
		if(err){
			console.log("error while deleting...");
		}else{
			res.json(deletedEmployee);
		}
	});
});

module.exports = router;