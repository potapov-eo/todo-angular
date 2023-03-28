import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem, TodosServiceService } from '../../service/todos-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  constructor(private todosServiceService: TodosServiceService ) {
  }
  todos$! : Observable<TodoItem[]>

  ngOnInit(): void {
    this.todos$ = this.todosServiceService.todos$
    this.getTodos()
  }
  getTodos (){
  this.todosServiceService.getTodos()
}
  getDataInParent (item:TodoItem){
    console.log(item.title)
  }
}
