import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({ // this is known as the decorator
  selector: 'app-root', // this is the selector in index.html, it injects  our code wherever it sees this selector
  templateUrl: './app.component.html', // just for this component
  styleUrls: ['./app.component.css'] // just for this component
})
export class AppComponent {
  title:string = 'Prajeet Crash Course';

  todoValue: string;
  list: Todo[];

  ngOnInit() {
    this.list = [];
    this.todoValue = "";
  }

  addItem() {
    if (this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      this.list.push(newItem);
    }
    this.todoValue = "";
  }

  deleteItem(id:number) {
    this.list = this.list.filter(item => item.id !== id);
  }











  // myName:string =  "Marco Pierre Rayner"
  //
  // constructor() {
  //   console.log("constructor called!");
  //   this.doSomething(this.myName);
  // }
  //
  // doSomething(value:string) string {
  //   return value + "!"
  // }
}
