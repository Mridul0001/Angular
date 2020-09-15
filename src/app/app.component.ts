import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  text = "";

  constructor(){}

  updateValue(event) {
    this.text = event.target.value;
    console.log(event.target.value);
  }
}
