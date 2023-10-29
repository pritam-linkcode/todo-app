import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  empForm: FormGroup = this.fb.group({
    firstName: this.fb.control('', [Validators.required]),
    lastName: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required]),
  });

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {} 

  addEmp() {
    console.log(this.empForm.value);
    this.userService.employees.push(this.empForm.value);
    this.router.navigate(['dashboard'])
  }


}
