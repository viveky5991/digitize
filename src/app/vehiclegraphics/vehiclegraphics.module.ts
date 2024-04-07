import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardoorComponent } from './/cardoor//cardoor.component';

const routes: Routes = [
  { path: 'CarDoor', component: CardoorComponent },
  { path: 'HalfWrapVehicle', component: CardoorComponent },
  { path: 'VanBranding', component: CardoorComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Vehiclegraphics { }
