import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    loadChildren: () => import('./marketprint/marketprint.module').then(m => m.MarketprintModule)
  },
];
