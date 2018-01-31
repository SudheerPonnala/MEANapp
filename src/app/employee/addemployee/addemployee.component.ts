import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { EmployeedetailsComponent } from '../../services/employeedetails.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  empDetails;
  _editMode;	
  rForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, public service: EmployeedetailsComponent, private fBuilder: FormBuilder) {
  		this.rForm = fBuilder.group({
  			"name": ['', Validators.required],
  			"age": ['', Validators.required],
        "dept": ['', Validators.required]
  		});

  		this._editMode = this.route.snapshot.params.empId;

  		if(this._editMode){
        //Call to get employee details by id
  			this.service.getEmployee(this._editMode).
        subscribe(data=>{
        this.empDetails = data;
        this.rForm.setValue({
            name: data.name,
            age: data.age,
            dept: data.dept
          });
        });
  		}
  }

  //Method to add or update employee
  addEmployee(x){
  		if(this._editMode){
        x._id = this.empDetails._id;
        //call to update  employee
  			this.service.updateDetails(x).
        subscribe((response)=>alert("updated successfully"));
  		}else{
        //call to add employee
  			this.service.addEmployee(x).
        subscribe(data=>alert("added successfully"));
  		}
  		this.router.navigate(['showemployee']);
  }

  ngOnInit() {
  }

}
