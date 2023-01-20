import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

    todos:Todo[]
    localitem:any
    constructor()
    {
      this.todos=[];
      this.localitem =localStorage.getItem("todos");
      if(this.localitem == null)
      {
        this.todos=[];
      }
    else{
      this.todos= JSON.parse(this.localitem);
    }

    }


    deletetodo(todo:Todo)
    {
      console.log("reached there");
      const ind= this.todos.indexOf(todo);
      this.todos.splice(ind,1);
      console.log(this.todos);
      localStorage.setItem("todos",JSON.stringify(this.todos));

    }

    todoadd(todo:Todo)
    {
      console.log("reached there");
      console.log(todo);
      this.todos.push(todo);
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }
   
    toggle(todo:Todo)
    {
      console.log("reahed there");
      const ind= this.todos.indexOf(todo);
      this.todos[ind].active=!this.todos[ind].active;
      localStorage.setItem("todos",JSON.stringify(this.todos));

    }
}
