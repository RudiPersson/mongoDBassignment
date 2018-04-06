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


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    ContentComponent,
    BowlersComponent,
    TournamentsComponent,
    LvsComponent
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
