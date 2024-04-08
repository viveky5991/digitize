import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TshirtComponent } from './/tshirt//tshirt.component';

const routes: Routes = [
  { path: 'TShirt', component: TshirtComponent },
  { path: 'Jersey', component: TshirtComponent },
  { path: 'Caps', component: TshirtComponent },
  { path: 'NeckTie', component: TshirtComponent },
  { path: 'SafetyVest', component: TshirtComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class  Apparel { }
