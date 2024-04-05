import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CutfrostedstickerComponent } from './cutfrostedsticker/cutfrostedsticker.component';

const routes: Routes = [
  { path: 'ReverseCutFrostedsticker', component: CutfrostedstickerComponent },
  { path: 'StandardCutFrostedsticker', component: CutfrostedstickerComponent },
  { path: 'PrintedFrostedsticker', component: CutfrostedstickerComponent },
  { path: 'BlankFrostedsticker', component: CutfrostedstickerComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Frostedsticker { }
