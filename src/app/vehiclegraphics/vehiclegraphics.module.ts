import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardoorComponent } from './/cardoor//cardoor.component';

const routes: Routes = [
  { path: 'Car-Door', component: CardoorComponent },
  { path: 'Half-Wrap-Vehicle', component: CardoorComponent },
  { path: 'Van-Branding', component: CardoorComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Vehiclegraphics { }
