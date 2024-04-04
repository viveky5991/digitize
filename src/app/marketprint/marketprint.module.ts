import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrintComponent } from './print/print.component';

const routes: Routes = [
 
  {
    path: 'stationary',
    loadChildren: () => import('../stationary/stationary.module').then(m => m.StationaryModule)
  },
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
