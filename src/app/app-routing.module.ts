import { ChartComponent } from './lvs-data/chart/chart.component';
import { Pm10Component } from './lvs-data/pm10/pm10.component';
import { LvsComponent } from './lvs-data/lvs/lvs.component';
import { TournamentsComponent } from './tournament/tournaments/tournaments.component';
import { BowlersComponent } from './bowler/bowlers/bowlers.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
  { path: 'bowlers', component: BowlersComponent },
  { path: 'tournaments', component: TournamentsComponent },
  { path: 'lvs', component: LvsComponent },
  { path: 'lvs10', component: Pm10Component },
  { path: 'chart', component: ChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
