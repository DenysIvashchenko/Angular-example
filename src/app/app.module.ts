import { NavState } from './state/navigation.state';
import { UserState } from './state/user.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatTabsModule} from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { NgxsModule } from '@ngxs/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './sherd/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './sherd/menu/menu.component';
import { environment } from 'src/environments/environment';
import { ShowNavComponent } from './sherd/show-nav/show-nav.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavComponent,
    MenuComponent,
    ShowNavComponent,
    MainComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSliderModule,
    NgxsModule.forRoot( [UserState,NavState], {
      developmentMode: !environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
