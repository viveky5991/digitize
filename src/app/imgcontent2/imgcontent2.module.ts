import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imgcontent2Component } from './imgcontent2/imgcontent2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'die-cut', component: Imgcontent2Component },
  { path: 'print-cut', component: Imgcontent2Component },
  { path: 'transparent', component: Imgcontent2Component },
  { path: 'whiteink', component: Imgcontent2Component },
  { path: 'embossingseal', component: Imgcontent2Component },
  { path: 'kraftpaper', component: Imgcontent2Component },
  // { path: 'Stickers', component: Imgcontent2Component },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent2Module { }
