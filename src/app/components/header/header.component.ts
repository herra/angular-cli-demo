import { Component, Input } from '@angular/core'; //Notice! included Input 

@Component({
  selector: 'app-header-component',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html',
})

export class HeaderComponent {

  @Input()
  greeting: 'Hello World!';
}
