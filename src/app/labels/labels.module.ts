import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TraffolyteComponent } from './/traffolyte//traffolyte.component';

const routes: Routes = [
  { path: 'TraffolytePVCAcrylic', component: TraffolyteComponent },
  { path: 'MetalLabels', component: TraffolyteComponent },
  { path: 'WoodenLabels', component: TraffolyteComponent },
  { path: 'AcrylicLabels', component: TraffolyteComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Labels { }
