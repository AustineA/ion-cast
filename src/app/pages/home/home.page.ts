import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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

  constructor(private router: Router) {}

  filter(event) {
    console.log(event);
  }

  channel(channel) {
    const navExtras: NavigationExtras = {
      state: channel,
    };

    this.router.navigate(['station'], navExtras);
  }

  castPod(podcast) {
    const navExtras: NavigationExtras = {
      state: podcast,
    };

    this.router.navigate(['nowplaying'], navExtras);
  }
}
