import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WindowvinylletteringComponent } from './/windowvinyllettering//windowvinyllettering.component';

const routes: Routes = [
  { path: 'WindowVinylLettering', component: WindowvinylletteringComponent },
  { path: 'WindowGraphics', component: WindowvinylletteringComponent },
  { path: 'OneWayVisionSticker', component: WindowvinylletteringComponent },
  { path: 'WindowFilms', component: WindowvinylletteringComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Windowbranding { }
