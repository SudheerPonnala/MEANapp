import { Routes } from '@angular/router';
import { AddemployeeComponent } from './employee/addemployee/addemployee.component';
import { ShowemployeeComponent } from './employee/showemployee/showemployee.component';
import { EmpbyidComponent } from './employee/empbyid/empbyid.component';

export const appRoutes: Routes = [
	{
		path: 'addemployee',
		component: AddemployeeComponent
	}
	,{
		path: 'addemployee/:empId',
		component: AddemployeeComponent
	}
	,
	{
		path: 'showemployee',
		component: ShowemployeeComponent
		/*,
		children:[
			{
				path: ':empId',
				component: EmpbyidComponent
			}
		]
		*/
	},
	{
		path: 'showemployee/:empId',
		component: EmpbyidComponent
	},
	{
		path: '',
		redirectTo: '/showemployee',
		pathMatch: 'full'
	}
]