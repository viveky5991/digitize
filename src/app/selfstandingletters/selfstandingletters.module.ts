import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MetallettersComponent } from './/metalletters//metalletters.component';

const routes: Routes = [
  { path: 'Metal', component: MetallettersComponent },
  { path: 'Wooden', component: MetallettersComponent },
  { path: 'AcrylicLetters', component: MetallettersComponent },
  { path: 'ForexFoam', component: MetallettersComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Selfstandingletters { }
