import {State, Action, StateContext, Selector} from '@ngxs/store';
import {Increment,Decriment} from './action/todo.action';
import {tap} from 'rxjs/operators';
import {Todo} from './Todo';


export class CounterInterfase {
    counter: number;
}

@State<CounterInterfase>({
    name: 'counter',
    defaults: {
       counter:0
    }
})
export class TodoState {

	@Selector()
    static GetCounter(state: CounterInterfase) {
        return state.counter;
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
}