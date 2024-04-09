import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexfaceComponent } from './/flexface//flexface.component';

const routes: Routes = [
  { path: 'FlexFace', component: FlexfaceComponent },
  { path: 'Frontlit3D', component: FlexfaceComponent },
  { path: 'Backtlit3D', component: FlexfaceComponent },
  { path: 'PushThrough', component: FlexfaceComponent },
  { path: 'Neon', component: FlexfaceComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Signboard { }
