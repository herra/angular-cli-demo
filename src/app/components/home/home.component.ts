import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = 'Angular';
  tasks = [
    { title: 'test', content: 'some beatiful content', deadline: new Date() },
    { title: 'test2', content: 'some ugly content', deadline: new Date() }
  ];

  onSubmitted(task: any) {    
    this.tasks.push(task);
  }

}
