import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';

const routes: Routes = [
 
  { path: 'policy',component: PolicyComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PolicyModule { }
