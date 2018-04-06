import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lvs',
  templateUrl: './lvs.component.html',
  styleUrls: ['./lvs.component.css']
})
export class LvsComponent implements OnInit {

  lvsData;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getLvsdata()
      .subscribe(res => this.lvsData = res);
  }

}
