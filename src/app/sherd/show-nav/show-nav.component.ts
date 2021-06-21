import { Nav } from './../../models/nav.model';
import { Url } from './../../models/url.model';
import { NavState } from './../../state/navigation.state';
import { Select, Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-nav',
  templateUrl: './show-nav.component.html',
  styleUrls: ['./show-nav.component.scss']
})
export class ShowNavComponent implements OnInit {
  navLength!:Nav[]

  @Select(NavState.getNav) navLinks$!: Observable<Nav[]>
 
  constructor(
    private router: Router,
    private store: Store
    ) {}

  ngOnInit(): void {
   this.navLinks$.subscribe((nav)=> this.navLength = nav)
  }

}
