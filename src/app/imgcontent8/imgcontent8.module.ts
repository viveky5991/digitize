import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent8Component } from './imgcontent8/imgcontent8.component';


const routes: Routes = [
  { path: 'SailFlags', component: Imgcontent8Component },
  { path: 'TearDropFlags', component: Imgcontent8Component },
  { path: 'LShapeFlags', component: Imgcontent8Component },
  { path: 'BladeFlags', component: Imgcontent8Component },
  { path: 'TelescopicFlags', component: Imgcontent8Component },
  { path: 'CarFlags', component: Imgcontent8Component },
  { path: 'CarDesert', component: Imgcontent8Component },
  { path: 'Dashboard', component: Imgcontent8Component }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent8Module { } 
