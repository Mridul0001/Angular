import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../records.service';

interface myData {
  obj: Object
}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  records = []
  constructor(private myFirstService: RecordsService) { }

  ngOnInit() {
    this.myFirstService.getData<myData>()
        .subscribe(data => {
         this.records = data.obj
    })
  }

}
