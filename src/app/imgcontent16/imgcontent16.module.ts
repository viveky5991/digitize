import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { Imgcontent16Component } from './imgcontent16/imgcontent16.component';

const routes: Routes = [
  { path: 'popups', component: Imgcontent16Component },
  { path: 'fabric-popups', component: Imgcontent16Component },
  { path: 'rollup-banners', component: Imgcontent16Component },
  { path: 'x-banners', component: Imgcontent16Component },
  { path: 'banners-flex', component: Imgcontent16Component },
  { path: 'fence-banners ', component: Imgcontent16Component },
  { path: 'lama-stand', component: Imgcontent16Component },
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  
  ]
})
export class Imgcontent16Module { }
