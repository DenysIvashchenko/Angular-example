import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddUser } from '../actions/user.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public store: Store) {}

  /**
   * pushing some data to store in my case name and url of user
   */
  addUser(name: string, url: string):void {
    this.store.dispatch(new AddUser({name:name, url:url}))
    console.log(name,url)
  }

  ngOnInit(): void {
  }

}
