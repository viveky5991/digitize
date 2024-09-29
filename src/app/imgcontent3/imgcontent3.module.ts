import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent3Component } from './imgcontent3/imgcontent3.component';

const routes: Routes = [
  { path: 'Window-Vinyl', component: Imgcontent3Component },
  { path: 'Window-Graphics', component: Imgcontent3Component },
  { path: 'OneWay-Vision', component: Imgcontent3Component },
  { path: 'Wall-Vinyl', component: Imgcontent3Component },
  { path: 'Wall-Graphics', component: Imgcontent3Component },
  { path: 'Canvas', component: Imgcontent3Component },
  { path: 'Wooden', component: Imgcontent3Component },
  { path: 'Acrylic', component: Imgcontent3Component },
  { path: 'MetalArt', component: Imgcontent3Component }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

})
export class Imgcontent3Module { }
