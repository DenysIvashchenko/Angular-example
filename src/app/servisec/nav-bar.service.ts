import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { RemoveUser } from '../actions/user.actions';
import { Nav } from '../models/nav.model';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor(public store:Store) { }

  createPath({}:Nav,{}:Nav): Nav[] {

    const navigationPaths = [
      {name:"About",path:"/about",isActive:true},
      ...arguments
    ]
     return navigationPaths;
   }
   delUser(name: string) {
    this.store.dispatch(new RemoveUser(name))
  }
}
