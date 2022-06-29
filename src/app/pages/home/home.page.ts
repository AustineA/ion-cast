import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { podcasts, discover } from 'src/app/services/shared/data';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ProfileComponent } from 'src/app/components/profile/profile.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  query: string;
  fresh = podcasts;
  discoverList = discover;
  isActive: boolean = false;

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {}

  filter(event) {
    // console.log(event);
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

  async openProfile() {
    const modal = await this.modalCtrl.create({
      // breakpoints: [0, 0.7, 1],
      // initialBreakpoint: 0.7,
      swipeToClose: true,
      cssClass: 'profile-sheet',
      presentingElement: this.routerOutlet.nativeEl,
      mode: 'ios',
      component: ProfileComponent,
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
  }
}
