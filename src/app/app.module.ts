import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ContentComponent } from './content/content.component';
import { BowlersComponent } from './bowler/bowlers/bowlers.component';

import { HttpClientModule } from '@angular/common/http';
import { TournamentsComponent } from './tournament/tournaments/tournaments.component';
import { LvsComponent } from './lvs-data/lvs/lvs.component';
import { Pm10Component } from './lvs-data/pm10/pm10.component';
import { ChartComponent } from './lvs-data/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    ContentComponent,
    BowlersComponent,
    TournamentsComponent,
    LvsComponent,
    Pm10Component,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
