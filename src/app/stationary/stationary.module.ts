import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StationarylistingComponent } from './stationarylisting/stationarylisting.component';
import { StationarydetailsComponent } from './stationarydetails/stationarydetails.component';

const routes: Routes = [
  { path: 'business-cards', component: StationarylistingComponent },
  { path: 'voucher', component: StationarylistingComponent },
  { path: 'hang-tag', component: StationarylistingComponent },
  { path: 'sticker-gloss', component: StationarylistingComponent },
  { path: 'pvcwhite', component: StationarylistingComponent },
  { path: 'epoxy', component: StationarylistingComponent },
  // { path: 'notepads', component: StationarylistingComponent },
  // { path: 'notebook&journal', component: StationarylistingComponent },
  // { path: 'binding', component: StationarylistingComponent },
  // { path: 'thankyoucard', component: StationarylistingComponent },
  //  { path: 'certificates', component: StationarylistingComponent },
  //  { path: 'calendars', component: StationarylistingComponent },
  // // { path: 'business-cards', component: StationarylistingComponent },
  // // { path: 'certificates', component: StationarylistingComponent },
  // { path: 'details-heads', component: StationarydetailsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StationaryModule { }
