import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  num1: number = 10;
  num2: number = 20;

  total: number = 0;

  add() {
    this.total = this.num1 + this.num2;
  }
  
}  
 