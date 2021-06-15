import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RemoveUser } from '../actions/user.actions';
import { Store,Select } from '@ngxs/store'; 
import { User } from '../models/user.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  users$!: Observable<User>;

  constructor(public store: Store) {
    this.users$ = this.store.select( state => state.users.users)
   }

  ngOnInit(): void {
    console.log(this.users$.subscribe((a)=> console.log(a)))
  }

}
