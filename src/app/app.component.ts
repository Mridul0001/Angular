import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myValue = "";
  myDisabled = false;

  constructor(){
    this.myValue = "";
    this.myDisabled = false;
    setInterval(() => {
      this.myValue = Math.random().toString(),
      this.myDisabled = Math.random() > 0.5
    }, 500)
  }
}
