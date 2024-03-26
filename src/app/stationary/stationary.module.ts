import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StationarylistingComponent } from './stationarylisting/stationarylisting.component';
import { StationarydetailsComponent } from './stationarydetails/stationarydetails.component';

const routes: Routes = [
  { path: 'business-cards', component: StationarylistingComponent },
  { path: 'certificates', component: StationarylistingComponent },
  { path: 'letter-heads', component: StationarydetailsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StationaryModule { }
