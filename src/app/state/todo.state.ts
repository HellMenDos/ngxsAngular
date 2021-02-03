import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Increment,Decriment,GetTodos,DeleteTodos} from './action/todo.action';
import {tap} from 'rxjs/operators';
import {Todo} from './Todo';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';


export class CounterInterfase {
    counter: number;
    todos: Todo[]
}

@State<CounterInterfase>({
    name: 'counter',
    defaults: {
       counter:0,
       todos: []
    }
})
@Injectable()
export class TodoState {

    constructor(private http: HttpClient){

    }

	@Selector()
    static GetCounter(state: CounterInterfase) {
        return state.counter;
    }

    @Selector()
    static GetTodos(state: CounterInterfase) {
        return state.todos;
    }


    @Action(Increment)
    incr({getState, setState}: StateContext<CounterInterfase>, {count}: Increment) {
        const state = getState();
        state.counter += count
        setState({
            ...state
        });
    }
    @Action(Decriment)
    decr({getState, setState}: StateContext<CounterInterfase>, {count}: Decriment) {
        const state = getState();
        if (state.counter >= 1) {
        	state.counter -= count
        }
        setState({
            ...state
        });
    }

    @Action(GetTodos)
    get({getState, setState}: StateContext<CounterInterfase>) {
        const state = getState();
        
        this.http.get('https://jsonplaceholder.typicode.com/todos')
        .subscribe((data) => {
            state.todos = state.todos.concat( data ) 

            setState({
                ...state
            });
        });
    }

    @Action(DeleteTodos)
    delete({getState, setState}: StateContext<CounterInterfase>, {id}: DeleteTodos) {
        const state = getState();
            delete state.todos[id]
            setState({
                ...state
            });
 
    }
}