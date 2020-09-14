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

  constructor(){}

  callThisFunction() {
    this.myDisabled = !this.myDisabled;
    console.log(this.myDisabled);
  }
}
