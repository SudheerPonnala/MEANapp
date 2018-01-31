# MEAN

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

-------------------------------------------------------------------------------------------------------------------------------------------------

Step:1
------

Create the database "Company" with the collection "employee"

use Company

db.createCollection("employee")

Step:2
------

Insert sample data into the collection

db.employee.insert([
{
	"name" : "sudheer",
	"age" : 24,
	"dept" : "Web developer"
}
{
	"name" : "murali",
	"age" : 30,
	"dept" : "telecom engineer"
}
{
	"name" : "nagaraj",
	"age" : 35,
	"dept" : "GIS engineer"
}
{
	"name" : "arshad",
	"age" : 58,
	"dept" : "Overseas"
}
{
	"name" : "zia",
	"age" : 234,
	"dept" : "Business Man"
}])

Step:3
------
Install the dependencies by npm

npm install

Step:4
------
run the below command

ng build

Step:5
------
run the server by using following command and open "localhost:3000" in browser

node server



