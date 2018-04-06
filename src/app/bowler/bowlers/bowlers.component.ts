import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bowlers',
  templateUrl: './bowlers.component.html',
  styleUrls: ['./bowlers.component.css']
})
export class BowlersComponent implements OnInit {

  bowlers;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getBowlers()
      .subscribe(res =>
        this.bowlers = res);
  }

}
