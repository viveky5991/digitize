import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent10Component } from './imgcontent10/imgcontent10.component';


const routes: Routes = [
  { path: 'Hoisting', component: Imgcontent10Component },
  { path: 'wall_mounted_flags', component: Imgcontent10Component },
  { path: 'Stadium', component: Imgcontent10Component },
  { path: 'Advertising', component: Imgcontent10Component },
  { path: 'Festival', component: Imgcontent10Component },
  { path: 'TableFlags', component: Imgcontent10Component },
  { path: 'TableFlagsRoyal', component: Imgcontent10Component },
  { path: 'ConferenceFlags', component: Imgcontent10Component },
  { path: 'ConferenceFlagsHanging', component: Imgcontent10Component }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent10Module { }
