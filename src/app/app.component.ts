import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
