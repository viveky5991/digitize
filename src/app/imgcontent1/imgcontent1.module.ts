import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent1Component } from './imgcontent1/imgcontent1.component';


const routes: Routes = [
  { path: 'selfink-stamps', component: Imgcontent1Component },
  { path: 'wax-seal', component: Imgcontent1Component },
  { path: 'embossing-seal', component: Imgcontent1Component },
  { path: 'flyers', component: Imgcontent1Component },
  { path: 'compliment-slips', component: Imgcontent1Component },
  { path: 'Coupons', component: Imgcontent1Component },
  { path: 'Tent-Cards', component: Imgcontent1Component }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent1Module { }
