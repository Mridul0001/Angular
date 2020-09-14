import { Component } from '@angular/core';

//class decorator example
function log(className){
  console.log(className);
  return function(...args) {
    console.log("Arguments passed are: ", args);
    return new className(...args);
  }
}

@log
class myExampleClass {
  constructor(arg1, arg2){
    console.log("Constructor invoked");
  }
}

const myClass = new myExampleClass(5, 10);

//member decorator example
// function log(target, name, descriptor){
//   //console.log(target, name, descriptor);
//   //descriptor.value is the original function that is being called
//   //store the original value first
//   const original = descriptor.value;
//
//   //overriding the original function
//   descriptor.value = function(...args) {
//     console.log("Arguments " + args + " were passed to this function");
//     const result = original.apply(this, args);
//     console.log("The result is: " + result);
//     return result;
//   }
//
//   return descriptor;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro';

  constructor(){
    console.log("This is called from constructor " + this.aSimpleMethod(5,3));
  }

  //Example of member decorator
//   @log
  aSimpleMethod(a,b){
    //console.log("Hey! wowww a decorator")
    return a*b;
  }
}
