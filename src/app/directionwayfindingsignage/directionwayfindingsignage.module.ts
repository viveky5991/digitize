import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelfstandingsignageComponent } from './/selfstandingsignage//selfstandingsignage.component';

const routes: Routes = [
  { path: 'SelfStanding', component: SelfstandingsignageComponent },
  { path: 'WallMounted', component: SelfstandingsignageComponent },
  { path: 'Hanging', component: SelfstandingsignageComponent },
  { path: 'Directory', component: SelfstandingsignageComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Directionwayfindingsignage { }
