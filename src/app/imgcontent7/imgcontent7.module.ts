import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent7Component } from './imgcontent7/imgcontent7.component';


const routes: Routes = [
  { path: 'MetalPlates', component: Imgcontent7Component },
  { path: 'AcrylicPlates', component: Imgcontent7Component },
  // { path: 'WoodenPlates', component: Imgcontent7Component },
  // { path: 'TableTopPlates', component: Imgcontent7Component },
  // { path: 'TraffolytePVCAcrylic', component: Imgcontent7Component },
  // { path: 'MetalLabels', component: Imgcontent7Component },
  // { path: 'WoodenLabels', component: Imgcontent7Component },
  // { path: 'AcrylicLabels', component: Imgcontent7Component }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent7Module { }
