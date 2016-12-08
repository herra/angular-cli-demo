import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  @Input()
  tasks;

  constructor() { }

  ngOnInit() {
    this.tasks = this.tasks || [{ title: 'Test 1', content: 'Testing the component itself.', deadline: new Date() }];
  }

}
