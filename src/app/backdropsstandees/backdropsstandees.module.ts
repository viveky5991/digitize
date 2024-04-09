import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WoodenbackdropComponent } from './/woodenbackdrop//woodenbackdrop.component';

const routes: Routes = [
  { path: 'WoodenBackdrop', component: WoodenbackdropComponent },
  { path: 'StepRepeat', component: WoodenbackdropComponent },
  { path: 'FabricIndoor', component: WoodenbackdropComponent },
  { path: 'FabricOutdoor', component: WoodenbackdropComponent },
  { path: 'PopoutBannerSpring', component: WoodenbackdropComponent },
  { path: 'TobleroneFrame', component: WoodenbackdropComponent },
  { path: 'CutoutStandee', component: WoodenbackdropComponent } 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class  Backdropsstandees { }
