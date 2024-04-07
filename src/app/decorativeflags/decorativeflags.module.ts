import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarflagsComponent } from './/carflags//carflags.component';

const routes: Routes = [
  { path: 'CarFlags', component: CarflagsComponent },
  { path: 'CarDesertFlags', component: CarflagsComponent },
  { path: 'DashboardFlags', component: CarflagsComponent },
  { path: 'PennantFlags', component: CarflagsComponent },
  { path: 'BuntingFlags', component: CarflagsComponent },
  { path: 'ToothpickFlags', component: CarflagsComponent }

 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Decorativeflags { }
