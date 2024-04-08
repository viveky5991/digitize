import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MetalnameplatesComponent } from './/metalnameplates//metalnameplates.component';

const routes: Routes = [
  { path: 'MetalPlates', component: MetalnameplatesComponent },
  { path: 'AcrylicPlates', component: MetalnameplatesComponent },
  { path: 'WoodenPlates', component: MetalnameplatesComponent },
  { path: 'TableTopPlatesSign', component: MetalnameplatesComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Nameplate { }
