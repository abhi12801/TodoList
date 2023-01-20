import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  todo!: Todo ;

  @Output() tododelete: EventEmitter<Todo>= new EventEmitter;
  @Output() donetoggle: EventEmitter<Todo>= new EventEmitter;

  onclick(todo:Todo)
  {

    this.tododelete.emit(todo);
    console.log("HIIIIIIIIIIIIIII");
  }

  toggledone(todo:Todo)
  {
       console.log("toggle");
       this.donetoggle.emit(todo);
  }
}
