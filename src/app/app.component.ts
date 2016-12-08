import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header-component greeting="{{specialGreeting}}"></app-header-component>
    <content-component></content-component>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent  { specialGreeting = 'Hello Angular World!' }
