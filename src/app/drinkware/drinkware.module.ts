import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MugsComponent } from './/mugs//mugs.component';

const routes: Routes = [
  { path: 'Mugs', component: MugsComponent },
  { path: 'Bottles', component: MugsComponent },
  { path: 'Tumblers', component: MugsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class  Drinkware { }
