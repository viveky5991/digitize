import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelfinkComponent } from './selfink/selfink.component';

const routes: Routes = [
  // { path: 'Selfink', component: SelfinkComponent },
  { path: 'selfink-stamps', component: SelfinkComponent },
  { path: 'waxseal', component: SelfinkComponent },
  { path: 'embossingseal', component: SelfinkComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SealsModule { }
