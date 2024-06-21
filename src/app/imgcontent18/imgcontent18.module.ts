import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imgcontent18Component } from './imgcontent18/imgcontent18.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'promotion', component: Imgcontent18Component },
  { path: 'exhibition-counter', component: Imgcontent18Component },
  { path: 'tent-canopy', component: Imgcontent18Component },
  { path: 'parasol-umbrella', component: Imgcontent18Component },
  { path: 'cover-cloth', component: Imgcontent18Component },
  { path: 'media-frame', component: Imgcontent18Component },
  { path: 'foam-board', component: Imgcontent18Component },
  { path: 'shell-scheme', component: Imgcontent18Component },
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent18Module { }
