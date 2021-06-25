import { NavBarService } from './../servisec/nav-bar.service';
import { AddNavPath, DeleteNavPath } from './../actions/navigation.action';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddUser } from '../actions/user.actions';
import { Nav } from '../models/nav.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  isColapse:boolean = true;

  constructor(
    public store: Store,
    public router: Router,
    public navBarService : NavBarService
    ) {}

  /**
   * pushing some data to store in my case name and url of user
   */
  addUser(name: string, url: string):void {
    this.store.dispatch(new AddUser({name:name, url:url}));
    console.log(name,url)
  }
 
  colapseToggle():void {
    this.isColapse = !this.isColapse
  }
  
  
  ngOnInit(): void {
    this.store.dispatch(new AddNavPath(this.navBarService.createPath(
      {name:'homePage',path:'/',isActive:false},
      {name:'Page',path:'/'})
      ))
  }

  ngOnDestroy():void {
    this.store.dispatch(new DeleteNavPath())
  }

}
