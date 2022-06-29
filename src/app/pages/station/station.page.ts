import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { podcasts, discover } from 'src/app/services/shared/data';

@Component({
  selector: 'app-station',
  templateUrl: './station.page.html',
  styleUrls: ['./station.page.scss'],
})
export class StationPage implements OnInit {
  fresh = podcasts;
  station: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.getPodcast();
  }

  getPodcast() {
    this.station = this.router.getCurrentNavigation().extras.state;
    console.log(this.station);
  }
}
