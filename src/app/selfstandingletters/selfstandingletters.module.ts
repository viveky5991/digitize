import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MetallettersComponent } from './/metalletters//metalletters.component';

const routes: Routes = [
  { path: 'MetalLetters', component: MetallettersComponent },
  { path: 'WoodenLetters', component: MetallettersComponent },
  { path: 'AcrylicLetters', component: MetallettersComponent },
  { path: 'ForexFoamLetters', component: MetallettersComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Selfstandingletters { }
