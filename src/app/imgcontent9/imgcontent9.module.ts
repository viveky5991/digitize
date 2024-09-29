import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent9Component } from './imgcontent9/imgcontent9.component';


const routes: Routes = [
  // { path: 'Pennant', component: Imgcontent9Component },
  // { path: 'Bunting', component: Imgcontent9Component },
  // { path: 'Toothpick', component: Imgcontent9Component },
  { path: 'Poleflags', component: Imgcontent9Component },
  { path: 'Handflags', component: Imgcontent9Component },
  { path: 'FinishLine', component: Imgcontent9Component },
  // { path: 'BodyFlags', component: Imgcontent9Component },
  { path: 'FanScarf', component: Imgcontent9Component }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent9Module { }
