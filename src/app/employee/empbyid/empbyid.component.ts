import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeedetailsComponent } from '../../services/employeedetails.service';
@Component({
  selector: 'app-empbyid',
  templateUrl: './empbyid.component.html',
  styleUrls: ['./empbyid.component.css']
})
export class EmpbyidComponent implements OnInit {
  finalEmp;
  constructor(private route: ActivatedRoute, private service: EmployeedetailsComponent) {
    //call to get employee details by id
    this.service.getEmployee(this.route.snapshot.params.empId).
    subscribe(data=>this.finalEmp = data);
  }

  ngOnInit() {
  }

}
