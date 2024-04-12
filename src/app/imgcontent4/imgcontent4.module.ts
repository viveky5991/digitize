import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent4Component } from './imgcontent4/imgcontent4.component';
const routes: Routes = [
  { path: 'Unlit3D', component: Imgcontent4Component },
  { path: 'Frontlit3D', component: Imgcontent4Component },
  { path: 'Backlit3D', component: Imgcontent4Component },
  { path: 'Outlit3D', component: Imgcontent4Component },
  { path: 'PushThrough3D', component: Imgcontent4Component },
  { path: 'Neon3D', component: Imgcontent4Component }
 
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent4Module { } 
