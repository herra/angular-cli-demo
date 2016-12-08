import { Component, OnInit, Input, Output, OnChanges, SimpleChange, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  task = {};
  @Output() onSubmitted = new EventEmitter<Object>();

  onSubmit() {
    if (this.task.hasOwnProperty('deadline')) {
      if (typeof this.task['deadline'] == 'string') {
        this.task['deadline'] = new Date(this.task['deadline']); 
      }
    }
    if ('title' in this.task) {
      this.onSubmitted.emit(this.task);
      this.task = {};
    }
  }

  addTask() {
    console.log(this.task);
  }

}
