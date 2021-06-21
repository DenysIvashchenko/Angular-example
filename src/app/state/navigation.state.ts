import { Nav } from './../models/nav.model';
import { Url } from './../models/url.model';
import { AddNavPath, RemoveNavPath, DeleteNavPath } from './../actions/navigation.action';
import { State,Action,StateContext,Selector } from "@ngxs/store";
import { Injectable } from '@angular/core';



@Injectable()
export class NavStateModel {
    navPath!:Nav[];
}

@State<NavStateModel>({
    name:'navPath',
    defaults: {
        navPath:[]
    }
})

@Injectable()
export class NavState{

    @Selector()
    static getNav(state: NavStateModel): Nav[] {
        return state.navPath
    }

    @Action(AddNavPath)
    Add({getState,patchState}:StateContext<NavStateModel>,{payload}:AddNavPath): void {
        const state = getState();
        patchState({
            navPath: payload
        })
    }
    
    @Action(RemoveNavPath)
    Remove({getState,patchState}:StateContext<NavStateModel>): void {
        const state = getState().navPath
        state.pop();
        patchState({
            navPath: [...state]
        })
    }

    @Action(DeleteNavPath)
    Delete({getState,patchState}:StateContext<NavStateModel>):void {
        patchState({
            navPath: []
        })
    }
}

