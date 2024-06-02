import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent13Component } from './imgcontent13/imgcontent13.component';


const routes: Routes = [
  { path: 'Paperbag', component: Imgcontent13Component },
  { path: 'Kraftbag', component: Imgcontent13Component },
  { path: 'NonWovenbag', component: Imgcontent13Component },
  { path: 'Jutebag', component: Imgcontent13Component },
  { path: 'Totebag', component: Imgcontent13Component },
  { path: 'Canvasbag', component: Imgcontent13Component },
  { path: 'Drawstringbag', component: Imgcontent13Component },
  { path: 'CottonStringbag', component: Imgcontent13Component }
];
  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent13Module { }
