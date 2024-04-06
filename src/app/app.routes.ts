import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: '',
    loadChildren: () => import('./marketprint/marketprint.module').then(m => m.MarketprintModule)
  },
  //business-cards,letter-heads,envelopes,folders,notepads,notebook&journal,binding,thankyoucard,certificates,calendars
  {
    path: 'stationary',
    loadChildren: () => import('./stationary/stationary.module').then(m => m.StationaryModule)
  },
  // Selfink
  {
    path: 'seals',
    loadChildren: () => import('./seals/seals.module').then(m => m.SealsModule)
  },
  {
    path:'stickers',
    loadChildren: () => import('./stickers/stickers.module').then(m => m.StickerModule)
  },
  {
    path:'brochuresflyers',
    loadChildren: () => import('./brochuresflyers/brochuresflyers.module').then(m =>m.BrochuresflyersModule)
  },
  {
    path:'crowdpromotions',
    loadChildren: () => import('./crowdpromotions/crowdpromotions.module').then(m =>m.CrowdpromotionsModule)
  },
  {
    path:'frostedsticker',
    loadChildren: () => import('./frostedsticker/frostedsticker.module').then(m =>m.Frostedsticker)
  },
  {
    path:'windowbranding',
    loadChildren: () => import('./windowbranding/windowbranding.module').then(m =>m.Windowbranding)
  },
  { path: 'Contact', component: ContactComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
