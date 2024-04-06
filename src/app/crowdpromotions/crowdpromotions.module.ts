import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComplimentslipsComponent } from './complimentslips/complimentslips.component';

const routes: Routes = [
  { path: 'ComplimentSlips', component: ComplimentslipsComponent },
  { path: 'TicketsCoupons', component: ComplimentslipsComponent },
  { path: 'ScratchWinCoupons', component: ComplimentslipsComponent },
  { path: 'TentCards', component: ComplimentslipsComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CrowdpromotionsModule { }
