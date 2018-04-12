import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-pm10',
  templateUrl: './pm10.component.html',
  styleUrls: ['./pm10.component.css']
})
export class Pm10Component implements OnInit {

  lvsData;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getLvsdataPm10()
      .subscribe(res => this.lvsData = res);
  }

}
