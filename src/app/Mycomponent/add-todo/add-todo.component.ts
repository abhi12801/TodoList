
import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() addtodo:EventEmitter<Todo>= new EventEmitter;

  "todo":Todo
  "title":string
  "desc":string
  onSubmit()
  {
    console.log("hi");
     this.todo={
      "sno":2,
      "title":this.title,
      "desc":this.desc,
      "active":true
    };
    this.addtodo.emit(this.todo);
  }
}
