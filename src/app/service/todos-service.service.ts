import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface TodoItem {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {
  todos$: BehaviorSubject<TodoItem[]> = new BehaviorSubject<TodoItem[]>([])

  constructor(private http: HttpClient) {
  }

  getTodos() {
    this.http.get<TodoItem[]>('https://jsonplaceholder.typicode.com/todos').subscribe((res) => {
      this.todos$.next(res)
    })
  }
}

