import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PolicyComponent } from './policy/policy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
 
  { path: 'policy',component: PolicyComponent },
  { path: 'terms',component: TermsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PolicyModule { }
