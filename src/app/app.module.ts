import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ApiComponent } from './api/api.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './resources/material.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IsMobileService } from './resources/services/is-Movile.service';


@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    TutorialComponent,
    ApiComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot([]),
    FontAwesomeModule,
  ],
  providers: [IsMobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
