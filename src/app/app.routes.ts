import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: '',
    loadChildren: () => import('./marketprint/marketprint.module').then(m => m.MarketprintModule)
  },
  //business-cards,letter-heads,envelopes,folders,notepads,notebook&journal,binding,thankyoucard,certificates,calendars
  {
    path: '',
    loadChildren: () => import('./stationary/stationary.module').then(m => m.StationaryModule)
  },
  // Selfink
  {
    path: '',
    loadChildren: () => import('./seals/seals.module').then(m => m.SealsModule)
  },
  {
    path:'',
    loadChildren: () => import('./stickers/stickers.module').then(m => m.StickerModule)
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
