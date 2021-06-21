import { User } from './../models/user.model';
import { State,Action,StateContext,Selector } from "@ngxs/store";
import { AddUser,RemoveUser } from "../actions/user.actions";
import { Injectable } from '@angular/core';


@Injectable()
export class UserStateModel {
    users!: User[];
}

@State<UserStateModel>({
    name: 'users',
    defaults: {
        users:[]
    }
})

@Injectable()
export class UserState {

    @Selector()
    static getUsers(state: UserStateModel): User[] {
        console.log('getUsers',state.users)
        return state.users
    }
    @Action(AddUser)
    add({getState,patchState}:StateContext<UserStateModel>,{payload}:AddUser ): void {
        const state = getState();
        patchState({
            users:[...state.users, payload]
        })
    }
    @Action(RemoveUser)
    remove({getState,patchState}: StateContext<UserStateModel>,{payload}:RemoveUser): void {
        patchState({
            users: getState().users.filter(item => item.name !== payload)
        })
    }
}