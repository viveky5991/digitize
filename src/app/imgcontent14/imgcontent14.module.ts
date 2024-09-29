import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent14Component } from './imgcontent14/imgcontent14.component';

const routes: Routes = [
  { path: 'Frosted-Sticker', component: Imgcontent14Component },
  // { path: 'vehicle-graphics', component: Imgcontent14Component },
  { path: 'Magnetic-Sheet', component: Imgcontent14Component },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent14Module { }
