import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData(){
    return ["Apple", "Orange", "Mango", "Banana"]
  }
}
