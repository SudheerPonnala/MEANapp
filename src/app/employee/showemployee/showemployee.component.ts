import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeedetailsComponent } from '../../services/employeedetails.service';

@Component({
  selector: 'app-showemployee',
  templateUrl: './showemployee.component.html',
  styleUrls: ['./showemployee.component.css']
})
export class ShowemployeeComponent implements OnInit {
  
  empDetails;
  public employeeList;
  public employeedata;

  constructor(private routes: Router, private service: EmployeedetailsComponent) {
      this.callAllEmployeeDetails();
  }

  //Method to get ALl employee details
  callAllEmployeeDetails(){
      this.service.getEmployees().
      subscribe((allemployees)=>this.employeeList = allemployees,
      (error)=>alert("error occured...")); 
  }

  //To display employye details
  getEmp(emp){
  		this.routes.navigate(['showemployee',emp._id]);
  }	

  //bind employee details to form
  editEmployee(emp){
  		this.routes.navigate(['addemployee',emp._id]);
  }

  //delete employee
  delEmployee(emp){
  		this.service.deleteEmployee(emp._id).
      subscribe((data)=>{
        this.callAllEmployeeDetails();
        alert("Employee deleted successfully");
      });
  }

  ngOnInit() {
  }
}
