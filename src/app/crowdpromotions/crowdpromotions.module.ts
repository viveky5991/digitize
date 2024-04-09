import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComplimentslipsComponent } from './complimentslips/complimentslips.component';

const routes: Routes = [
  { path: 'Compliment-Slips', component: ComplimentslipsComponent },
  { path: 'Tickets-Coupons', component: ComplimentslipsComponent },
  { path: 'ScratchWin-Coupons', component: ComplimentslipsComponent },
  { path: 'Tent-Cards', component: ComplimentslipsComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CrowdpromotionsModule { }
