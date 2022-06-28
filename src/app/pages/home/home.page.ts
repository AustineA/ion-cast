import { Component } from '@angular/core';
import { podcasts, discover } from 'src/app/services/shared/data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  query: string;
  fresh = podcasts;
  discoverList = discover;

  constructor() {}

  filter(event) {
    console.log(event);
  }
}
