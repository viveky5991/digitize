import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Imgcontent6Component } from './imgcontent6/imgcontent6.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // { path: 'SelfStanding', component: Imgcontent6Component },
  // { path: 'WallMounted', component: Imgcontent6Component },
  // { path: 'Hanging', component: Imgcontent6Component },
  // { path: 'Directory', component: Imgcontent6Component },
  // { path: 'Metal', component: Imgcontent6Component },
  // { path: 'Wooden-Letters', component: Imgcontent6Component },
  // { path: 'AcrylicLetters', component: Imgcontent6Component },
  // { path: 'ForexFoam', component: Imgcontent6Component }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent6Module { }
