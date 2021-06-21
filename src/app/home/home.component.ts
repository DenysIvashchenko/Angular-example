import { AddNavPath, DeleteNavPath } from './../actions/navigation.action';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddUser } from '../actions/user.actions';
import { Nav } from '../models/nav.model';

// const path:Nav[] = [
//   {name:"Home",path:"/home",isActive:true}
// ]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  isColapse:boolean = true;

  constructor(
    public store: Store,
    public router: Router
    ) {}

  /**
   * pushing some data to store in my case name and url of user
   */
  addUser(name: string, url: string):void {
    this.store.dispatch(new AddUser({name:name, url:url}));
    console.log(name,url)
  }
  creatNavPath(name:string,path: string,isActive:boolean): Nav[] {
    return [{name:name,path:path,isActive:isActive}]
  }

  colapseToggle():void {
    this.isColapse = !this.isColapse
  }
  
  
  ngOnInit(): void {
    this.store.dispatch(new AddNavPath(this.creatNavPath("Home","/home",true)))
  }

  ngOnDestroy():void {
    this.store.dispatch(new DeleteNavPath())
  }

}
