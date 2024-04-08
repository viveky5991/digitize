import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HoistingflagsComponent } from './/hoistingflags//hoistingflags.component';

const routes: Routes = [
  { path: 'Hoisting', component: HoistingflagsComponent },
  { path: 'WallMounted', component: HoistingflagsComponent },
  { path: 'Stadium', component: HoistingflagsComponent },
  { path: 'Advertising', component: HoistingflagsComponent },
  { path: 'Festival', component: HoistingflagsComponent }

 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Outdoorflags { }
