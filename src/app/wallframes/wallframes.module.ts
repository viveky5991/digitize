import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './/canvas//canvas.component';

const routes: Routes = [
  { path: 'Canvas', component: CanvasComponent },
  { path: 'Wooden', component: CanvasComponent },
  { path: 'Acrylic', component: CanvasComponent },
  { path: 'MetalArt', component: CanvasComponent },
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Wallframes { }
