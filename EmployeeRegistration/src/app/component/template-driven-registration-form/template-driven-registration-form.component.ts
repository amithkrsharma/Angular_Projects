import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-template-driven-registration-form',
  templateUrl: './template-driven-registration-form.component.html',
  styleUrls: ['./template-driven-registration-form.component.css']
})
export class TemplateDrivenRegistrationFormComponent implements OnInit {

  employee: Employee;

  constructor() { 
    this.employee = {fullname:'', email:'', phonenumber:'', password:'', confirmpassword:''};
  }

  ngOnInit(): void {
  }

  addUserDetails(employee: Employee, isValid: any) {
    console.log(employee, isValid);
  }

}
