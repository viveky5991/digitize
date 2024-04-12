import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrintComponent } from './print/print.component';
// import { StationarylistingComponent } from '../stationary/stationarylisting/stationarylisting.component';

const routes: Routes = [
 
 // { path: 'letter-heads', component: PrintComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MarketprintModule { }
