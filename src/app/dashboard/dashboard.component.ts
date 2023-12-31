import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public userService: UserService,
    private router: Router
  ) {} 

  ngOnInit(): void {
  }

  addEmp() {
    this.router.navigate(['addemp'])
  }

}
