import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WoodenbackdropComponent } from './/woodenbackdrop//woodenbackdrop.component';

const routes: Routes = [
  { path: 'WoodenBackdrop', component: WoodenbackdropComponent },
  { path: 'StepRepeatBackdrop', component: WoodenbackdropComponent },
  { path: 'FabricBackdropIndoor', component: WoodenbackdropComponent },
  { path: 'FabricBackdropOutdoor', component: WoodenbackdropComponent },
  { path: 'PopoutBannerSpringABoard', component: WoodenbackdropComponent },
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
