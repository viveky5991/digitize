import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HoistingflagsComponent } from './/hoistingflags//hoistingflags.component';

const routes: Routes = [
  { path: 'HoistingFlags', component: HoistingflagsComponent },
  { path: 'WallMountedFlags', component: HoistingflagsComponent },
  { path: 'Stadiumflags', component: HoistingflagsComponent },
  { path: 'AdvertisingFlags', component: HoistingflagsComponent },
  { path: 'FestivalFlags', component: HoistingflagsComponent }

 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Outdoorflags { }
