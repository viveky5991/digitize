import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Imgcontent11Component } from './imgcontent11/imgcontent11.component';


const routes: Routes = [
  { path: 'Pens', component: Imgcontent11Component },
  { path: 'PUNotebooks', component: Imgcontent11Component },
  { path: 'PUOrganizer', component: Imgcontent11Component },
  { path: 'MousePad', component: Imgcontent11Component },
  { path: 'TShirt', component: Imgcontent11Component },
  { path: 'Jersey', component: Imgcontent11Component },
  { path: 'Caps', component: Imgcontent11Component },
  { path: 'NeckTie', component: Imgcontent11Component },
  { path: 'SafetyVest', component: Imgcontent11Component }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Imgcontent11Module { }
