import {Todo} from '../Todo'

export class Increment {
    static readonly type = 'Increment couner';

    constructor(public count:number) {
    }
}

export class Decriment {
    static readonly type = 'decriment couner';

    constructor(public count:number) {
    }
}

export class GetTodos {
    static readonly type = 'getTodos';
}

export class DeleteTodos {
    static readonly type = 'deleteTodos';

    constructor(public id:number) {
    }
}