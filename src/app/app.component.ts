import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  errorMsg = '';

  newTask = '';  

  todo: string[] = []; 

  isEdit = false;
  currentTaskIndex = 0;
  
  add(newTask: string) {
    if (newTask.trim() != '') {
      this.todo.push(newTask);
      this.newTask = ''
    } else {
      this.errorMsg = 'Please enter value'
    }
  }

  remove(index: number) {
    this.todo.splice(index, 1);
  }

  edit(index: number) {
    this.isEdit = true;
    this.currentTaskIndex = index;
    this.newTask = this.todo[index];
  }

  save() { 
    this.todo[this.currentTaskIndex] = this.newTask;
    this.isEdit = false;
    this.newTask = '';
  }
  
  cancelEdit() {
    this.isEdit = false;
    this.newTask = '';
  }
}  
 