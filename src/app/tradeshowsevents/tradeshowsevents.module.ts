import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WristbandComponent } from './/wristband//wristband.component';

const routes: Routes = [
  { path: 'Wristband', component: WristbandComponent },
  { path: 'NameBadges', component: WristbandComponent },
  { path: 'Lanyards', component: WristbandComponent },
  { path: 'IDCardsBadgeReel', component: WristbandComponent },
  { path: 'Keychain', component: WristbandComponent },
  { path: 'USB', component: WristbandComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class  Tradeshowsevents { }
