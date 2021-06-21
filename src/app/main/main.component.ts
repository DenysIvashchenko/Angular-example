import { DeleteNavPath } from './../actions/navigation.action';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { AddNavPath } from '../actions/navigation.action';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit,OnDestroy {

  constructor(
    public router:Router,
    public store: Store
    ) { }

  ngOnInit(): void {
    // this.store.dispatch(new AddNavPath({url:this.router.url}))
  }
  ngOnDestroy():void {
    this.store.dispatch(new DeleteNavPath())
  }
}
