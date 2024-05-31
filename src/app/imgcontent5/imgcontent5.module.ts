import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent5Component } from './imgcontent5/imgcontent5.component';

const routes: Routes = [
  { path: 'FlexFace', component: Imgcontent5Component },
  { path: 'Frontlit3DBoard', component: Imgcontent5Component },
  { path: 'Backlit3DBoard', component: Imgcontent5Component },
  { path: 'PushThrough', component: Imgcontent5Component },
  { path: 'Neon', component: Imgcontent5Component },
  { path: 'FlexFace-LightBox', component: Imgcontent5Component },
  { path: 'Fabric', component: Imgcontent5Component },
  { path: 'Acrylic', component: Imgcontent5Component },
  { path: 'Poster', component: Imgcontent5Component }
  

];  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent5Module { }
