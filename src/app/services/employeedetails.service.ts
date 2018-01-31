import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';

@Injectable()

export class EmployeedetailsComponent{
	constructor(public http: Http) { }

	//api call to get all employees list
	getEmployees(){
  		return this.http.get("/api/getAllEmployees").
  		map((response: Response)=>response.json())
  		// .
  		// catch((error: Response)=>alert("all error..."))
  	}

  	//api call to get employee details by _id
  	getEmployee(id){
  		return this.http.get("/api/getEmployee/"+id).
  		map((response: Response)=>response.json())
  		// .
  		// catch((error: Response)=>alert("single error..."))
  	}

  	//api call to Add employyee
	addEmployee(newEmp){
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers: headers});
		return this.http.post("/api/addEmployee",JSON.stringify(newEmp), options).
		map((response: Response)=>response.json());
	}

	//api call to delete employee
	deleteEmployee(id){
		return this.http.delete("/api/deleteEmployee/"+id).
		map((response: Response)=>response.json());
	}

	//api call to update employee
	updateDetails(emp){
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers: headers});
		return this.http.put("/api/updateEmployee/"+emp._id,JSON.stringify(emp), options).
		map((response: Response)=>response.json());
	}
}