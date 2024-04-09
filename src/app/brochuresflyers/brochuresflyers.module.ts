import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrochuresComponent } from './brochures/brochures.component';

const routes: Routes = [
  { path: 'Brochures', component: BrochuresComponent },
  { path: 'Flyers', component: BrochuresComponent },
  { path: 'Booklets', component: BrochuresComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BrochuresflyersModule { }
