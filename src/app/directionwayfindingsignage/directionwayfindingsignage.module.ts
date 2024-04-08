import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelfstandingsignageComponent } from './/selfstandingsignage//selfstandingsignage.component';

const routes: Routes = [
  { path: 'SelfStandingSignage', component: SelfstandingsignageComponent },
  { path: 'WallMountedSignage', component: SelfstandingsignageComponent },
  { path: 'HangingSignage', component: SelfstandingsignageComponent },
  { path: 'DirectorySignage', component: SelfstandingsignageComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Directionwayfindingsignage { }
