import { Component, OnInit } from '@angular/core';
import { podcasts, discover } from 'src/app/services/shared/data';

@Component({
  selector: 'app-station',
  templateUrl: './station.page.html',
  styleUrls: ['./station.page.scss'],
})
export class StationPage implements OnInit {
  fresh = podcasts;
  constructor() {}

  ngOnInit() {}
}
