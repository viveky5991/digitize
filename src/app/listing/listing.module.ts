import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  { path: 'wind-shield', component: ListingComponent },
  { path: 'helmet', component: ListingComponent },
  { path: 'floor-stickers', component: ListingComponent },
  { path: 'posters', component: ListingComponent },
  { path: 'USB', component: ListingComponent },
  { path: 'USB', component: ListingComponent },
  { path: 'flag-base', component: ListingComponent }

  // { path: 'repositionable', component: ListingComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListingModule { }
