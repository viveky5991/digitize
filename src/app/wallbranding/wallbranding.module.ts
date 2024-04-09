import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WallvinylletteringComponent } from './/wallvinyllettering//wallvinyllettering.component';

const routes: Routes = [
  { path: 'Wall-Vinyl', component: WallvinylletteringComponent },
  { path: 'Wall-Graphics', component: WallvinylletteringComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Wallbranding { }
