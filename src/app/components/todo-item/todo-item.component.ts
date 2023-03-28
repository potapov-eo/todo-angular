import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from '../../service/todos-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input()  itemData?: TodoItem
   @Output()  sendDataEmitter = new EventEmitter<TodoItem> ()

  sendDataInParent (){
    this.sendDataEmitter.emit(this.itemData)
  }
}
