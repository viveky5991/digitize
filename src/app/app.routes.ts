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
  {
    path:'wallbranding',
    loadChildren: () => import('./wallbranding/wallbranding.module').then(m =>m.Wallbranding)
  },
  {
    path:'wallframes',
    loadChildren: () => import('./wallframes/wallframes.module').then(m =>m.Wallframes)
  },
  {
    path:'vehiclegraphics',
    loadChildren: () => import('./vehiclegraphics/vehiclegraphics.module').then(m =>m.Vehiclegraphics)
  },
  {
    path:'indoor3D',
    loadChildren: () => import('./indoor3D/indoor3D.module').then(m =>m.Indoor3D)
  },
  {
    path:'signboard',
    loadChildren: () => import('./signboard/signboard.module').then(m =>m.Signboard)
  },
  {
    path:'lightboxsignages',
    loadChildren: () => import('./lightboxsignages/lightboxsignages.module').then(m =>m.Lightboxsignages)
  },
  {
    path:'directionwayfindingsignage',
    loadChildren: () => import('./directionwayfindingsignage/directionwayfindingsignage.module').then(m =>m.Directionwayfindingsignage)
  },
  {
    path:'selfstandingletters',
    loadChildren: () => import('./selfstandingletters/selfstandingletters.module').then(m =>m.Selfstandingletters)
  },
  {
    path:'nameplate',
    loadChildren: () => import('./nameplate/nameplate.module').then(m =>m.Nameplate)  
  },
  {
    path:'labels',
    loadChildren: () => import('./labels/labels.module').then(m =>m.Labels)  
  },
  {
    path:'advertisingflags',
    loadChildren: () => import('./advertisingflags/advertisingflags.module').then(m =>m.Advertisingflags)  
  },
  {
    path:'decorativeflags',
    loadChildren: () => import('./decorativeflags/decorativeflags.module').then(m =>m.Decorativeflags)  
  },
  {
    path:'handheldflags',
    loadChildren: () => import('./handheldflags/handheldflags.module').then(m =>m.Handheldflags)  
  },
  {
    path:'outdoorflags',
    loadChildren: () => import('./outdoorflags/outdoorflags.module').then(m =>m.Outdoorflags)  
  }, 
  {
    path:'officeflags',
    loadChildren: () => import('./officeflags/officeflags.module').then(m =>m.Officeflags)  
  },
  {
    path:'popupsrollupsbanners',
    loadChildren: () => import('./popupsrollupsbanners/popupsrollupsbanners.module').then(m =>m.Popupsrollupsbanners)  
  },
  {
    path:'backdropsstandees',
    loadChildren: () => import('./backdropsstandees/backdropsstandees.module').then(m =>m.Backdropsstandees)  
  },
  {
    path:'exhibitionevents',
    loadChildren: () => import('./exhibitionevents/exhibitionevents.module').then(m =>m.Exhibitionevents)  
  },
  {
    path:'officeessentials',
    loadChildren: () => import('./officeessentials/officeessentials.module').then(m =>m.Officeessentials)  
  },
  {
    path:'apparel',
    loadChildren: () => import('./apparel/apparel.module').then(m =>m.Apparel)  
  },
  {
    path:'tradeshowsevents',
    loadChildren: () => import('./tradeshowsevents/tradeshowsevents.module').then(m =>m.Tradeshowsevents)  
  },
  {
    path:'drinkware',
    loadChildren: () => import('./drinkware/drinkware.module').then(m =>m.Drinkware)  
  },
  {
    path:'shoppingpromotionalbags',
    loadChildren: () => import('./shoppingpromotionalbags/shoppingpromotionalbags.module').then(m =>m.Shoppingpromotionalbags)  
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
