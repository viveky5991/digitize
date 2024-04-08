import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexfaceComponent } from './/flexface//flexface.component';

const routes: Routes = [
  { path: 'FlexFaceSignBoard', component: FlexfaceComponent },
  { path: 'Frontlit3DSignBoard', component: FlexfaceComponent },
  { path: 'Backtlit3DSignBoard', component: FlexfaceComponent },
  { path: 'PushThroughSignBoard', component: FlexfaceComponent },
  { path: 'NeonSignBoard', component: FlexfaceComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Signboard { }
