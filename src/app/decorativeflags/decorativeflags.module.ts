import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarflagsComponent } from './/carflags//carflags.component';

const routes: Routes = [
  { path: 'CarFlags', component: CarflagsComponent },
  { path: 'CarDesert', component: CarflagsComponent },
  { path: 'Dashboard', component: CarflagsComponent },
  { path: 'Pennant', component: CarflagsComponent },
  { path: 'Bunting', component: CarflagsComponent },
  { path: 'Toothpick', component: CarflagsComponent }

 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Decorativeflags { }
