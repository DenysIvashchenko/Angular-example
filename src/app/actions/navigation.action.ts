import { Nav } from '../models/nav.model';

export class AddNavPath {
    static readonly type ='[NAV] Add'
    constructor(public payload: Nav[]){}
}
export class RemoveNavPath {
    static readonly type ='[NAV] Remove'
    constructor(){}
}

export class DeleteNavPath {
    static readonly type ='[NAV] Delete'
    constructor(){}
}