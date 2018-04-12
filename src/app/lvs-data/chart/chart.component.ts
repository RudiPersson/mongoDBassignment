import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


  pm10;
  pm25;
  chart: any = []; // This will hold our chart info

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    // this._dataService.getLvsdataPm10()
    //   .subscribe(res => this.pm10 = res);

    // this._dataService.getLvsdataPm25()
    //   .subscribe(res => this.pm25 = res);

    // this.getData();

    this.getData();
  }

  getData() {
    this._dataService.getLvsdata()
      .subscribe(res => {
        const stofId65 = res.filter(pm10 => pm10.StofId === '65').map(pm10Result => pm10Result.Resultat).map(Number);
        const stofId66 = res.filter(pm25 => pm25.StofId === '66').map(pm25Result => pm25Result.Resultat).map(Number);
        const alldates = res.filter(pm10 => pm10.StofId === '65').map(date => date.DatoMaerke).map(datee => new Date(datee).toDateString());

        console.log(stofId65);
        console.log(stofId66);
        console.log(alldates);



        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: alldates,
            datasets: [
              {
                label: 'PM10',
                data: stofId65,
                backgroundColor: '#ff6384',
                borderColor: '#ff6384',
                fill: false
              },
              {
                label: 'PM2.5',
                data: stofId66,
                backgroundColor: '#36a2eb',
                borderColor: '#36a2eb',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });


      });
  }


}
