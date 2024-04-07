import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PensComponent } from './/pens//pens.component';

const routes: Routes = [
  { path: 'Pens', component: PensComponent },
  { path: 'PUNotebooks', component: PensComponent },
  { path: 'PUOrganizer', component: PensComponent },
  { path: 'MousePad', component: PensComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class  Officeessentials { }
