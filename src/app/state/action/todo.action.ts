import {Todo} from '../Todo'

export class Increment {
    static readonly type = 'Increment couner';

    constructor(public count:Todo) {
    }
}

export class Decriment {
    static readonly type = 'decriment couner';

    constructor(public count:Todo) {
    }
}