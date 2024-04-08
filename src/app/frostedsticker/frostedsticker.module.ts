import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CutfrostedstickerComponent } from './cutfrostedsticker/cutfrostedsticker.component';

const routes: Routes = [
  { path: 'ReverseCut-Frosted', component: CutfrostedstickerComponent },
  { path: 'StandardCut-Frosted', component: CutfrostedstickerComponent },
  { path: 'Printed-Frosted', component: CutfrostedstickerComponent },
  { path: 'Blank-Frosted', component: CutfrostedstickerComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Frostedsticker { }
