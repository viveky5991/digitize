import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent15Component } from './imgcontent15/imgcontent15.component';

const routes: Routes = [
  { path: 'magnetic', component: Imgcontent15Component },
  { path: 'ceremonial', component: Imgcontent15Component },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent15Module { }
