import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent17Component } from './imgcontent17/imgcontent17.component';
const routes: Routes = [
  { path: 'wooden-backdrop', component: Imgcontent17Component },
  { path: 'repeat-backdrop', component: Imgcontent17Component },
  { path: 'backdrop-indoor', component: Imgcontent17Component },
  { path: 'backdrop-outdoor', component: Imgcontent17Component },
  { path: 'popout-banner', component: Imgcontent17Component },
  { path: 'toblerone-frame', component: Imgcontent17Component },
  { path: 'cutout-standee', component: Imgcontent17Component },
 ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent17Module { } 
