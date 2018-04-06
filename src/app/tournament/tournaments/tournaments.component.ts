import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {

  tournaments;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getTournaments()
      .subscribe(res =>
        this.tournaments = res);
  }

}
