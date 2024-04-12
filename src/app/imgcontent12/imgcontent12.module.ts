import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent12Component } from './imgcontent12/imgcontent12.component';


const routes: Routes = [
  { path: 'Wristband', component: Imgcontent12Component },
  { path: 'NameBadges', component: Imgcontent12Component },
  { path: 'Lanyards', component: Imgcontent12Component },
  { path: 'IDCardsBadgeReel', component: Imgcontent12Component },
  { path: 'Keychain', component: Imgcontent12Component },
  { path: 'Mugs', component: Imgcontent12Component },
  { path: 'Bottles', component: Imgcontent12Component },
  { path: 'Tumblers', component: Imgcontent12Component }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent12Module { }
