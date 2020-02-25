import { Component } from '@angular/core';

@Component({
  selector: 'shoes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    { path: './shoes', icon: 'work', title: 'Shoes' },
  ]
}
