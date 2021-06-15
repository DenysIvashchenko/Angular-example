import { User } from './../models/user.model';
import { State,Action,StateContext,Selector } from "@ngxs/store";
import { AddUser,RemoveUser } from "../actions/user.actions";

export class UserStateModel {
    name?: string
    users!: User[];
}
@State<UserStateModel>({
    name: 'users',
    defaults: {
        users:[]
    }
})

export class UserState {
    @Selector()
    static getUsers(state: UserStateModel): User[] {
        return state.users
    }

    @Action(AddUser)
    add({getState,patchState}:StateContext<UserStateModel>,{payload}:AddUser ) {
        const state = getState();
        patchState({
            users:[...state.users, payload]
        })
    }
    @Action(RemoveUser)
    remove({getState,patchState}: StateContext<UserStateModel>,{payload}:RemoveUser) {
        patchState({
            users: getState().users.filter(item => item.name !== payload)
        })
    }
}