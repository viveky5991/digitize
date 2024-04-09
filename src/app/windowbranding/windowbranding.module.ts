import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WindowvinylletteringComponent } from './/windowvinyllettering//windowvinyllettering.component';

const routes: Routes = [
  { path: 'Window-Vinyl', component: WindowvinylletteringComponent },
  { path: 'Window-Graphics', component: WindowvinylletteringComponent },
  { path: 'OneWay-Vision', component: WindowvinylletteringComponent },
  { path: 'Window-Films', component: WindowvinylletteringComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Windowbranding { }
