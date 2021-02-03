import { Component, OnInit } from '@angular/core';
import {Increment,Decriment,GetTodos} from './state/action/todo.action';
import {Select, Store} from '@ngxs/store';
import { TodoState,CounterInterfase } from './state/todo.state'
import {Observable} from 'rxjs';
import {Todo} from './state/Todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  @Select(TodoState.GetCounter) counter: Observable<number>;
  @Select(TodoState.GetTodos) Todos: Observable<Todo[]>;

  realCount: number
  realTodos: any

  constructor(private store: Store) {
  	this.realCount = 0
    this.realTodos = []
  }

  
  increment() {
  	this.store.dispatch(new Increment(1));
  }
  decrement() {
  	this.store.dispatch(new Decriment(1));
  }

  getAllTodos() {
    this.store.dispatch(new GetTodos());
    this.Todos.subscribe(x => this.realTodos = x)

  }

  ngOnInit() {
        this.counter.subscribe(x => this.realCount = x)
  }
}
