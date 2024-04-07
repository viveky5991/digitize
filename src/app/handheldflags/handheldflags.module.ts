import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PoleflagsComponent } from './/poleflags//poleflags.component';

const routes: Routes = [
  { path: 'Poleflags', component: PoleflagsComponent },
  { path: 'Handflags', component: PoleflagsComponent },
  { path: 'FinishLine', component: PoleflagsComponent },
  { path: 'BodyFlags', component: PoleflagsComponent },
  { path: 'FanScarf', component: PoleflagsComponent }

 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Handheldflags { }
