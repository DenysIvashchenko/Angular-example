import { Nav } from './../models/nav.model';
import { AddNavPath, DeleteNavPath } from './../actions/navigation.action';
import { Router } from '@angular/router';
import { UserState } from './../state/user.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoveUser } from '../actions/user.actions';
import { Store,Select } from '@ngxs/store'; 
import { User } from '../models/user.model';

const path:Nav[] = [
  {name:"About",path:"/about",isActive:true},
  {name:"Aditional",path:'/add',isActive:false}
]

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit,OnDestroy {

  // users$!: Observable<User>;   // here is two option to get data from store

  @Select(UserState.getUsers) users$!: Observable<User[]>

  constructor(
    public store: Store,
    public router: Router
    ) {

    // this.users$ = this.store.select( state => state.users.users)
   }

   delUser(name: string) {
    this.store.dispatch(new RemoveUser(name))
  }

  ngOnInit(): void {
    //it is just for testing to see how dose it work
    this.users$.subscribe((a)=> console.log(a))
    this.store.dispatch(new AddNavPath(path))
  }
  
  ngOnDestroy():void {
    this.store.dispatch(new DeleteNavPath())
  }

}
