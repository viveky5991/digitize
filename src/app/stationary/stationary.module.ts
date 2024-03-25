import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StationarylistingComponent } from './stationarylisting/stationarylisting.component';

const routes: Routes = [
  { path: 'business-cards', component: StationarylistingComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StationaryModule { }
