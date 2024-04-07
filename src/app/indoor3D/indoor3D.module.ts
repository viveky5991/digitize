import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Unlit3DsignageComponent } from './/unlit3Dsignage//unlit3Dsignage.component';

const routes: Routes = [
  { path: 'Unlit3DSignage', component: Unlit3DsignageComponent },
  { path: 'Frontlit3DSignage', component: Unlit3DsignageComponent },
  { path: 'Backlit3DSignage', component: Unlit3DsignageComponent },
  { path: 'Outlit3DSignage', component: Unlit3DsignageComponent },
  { path: 'PushThrough3DSignage', component: Unlit3DsignageComponent },
  { path: 'Neon3DSignage', component: Unlit3DsignageComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Indoor3D { }
