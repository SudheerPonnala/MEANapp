import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { ShowemployeeComponent } from './employee/showemployee/showemployee.component';
import { EmployeedetailsComponent } from './services/employeedetails.service';
import { EmpbyidComponent } from './employee/empbyid/empbyid.component';


@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    ShowemployeeComponent,
    EmpbyidComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [EmployeedetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
