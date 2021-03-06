import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'station',
    loadChildren: () =>
      import('./pages/station/station.module').then((m) => m.StationPageModule),
  },
  {
    path: 'nowplaying',
    loadChildren: () =>
      import('./pages/nowplaying/nowplaying.module').then(
        (m) => m.NowplayingPageModule
      ),
  },
  {
    path: 'search-result',
    loadChildren: () =>
      import('./pages/search-result/search-result.module').then(
        (m) => m.SearchResultPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
