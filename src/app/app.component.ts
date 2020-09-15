import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import {RecordsService} from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  records = []
  constructor(private myFirstService: RecordsService){

  }

  ngOnInit() {
    this.records = this.myFirstService.getData();
  }
}
