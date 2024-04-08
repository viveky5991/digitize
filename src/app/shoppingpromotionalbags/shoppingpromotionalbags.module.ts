import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaperbagComponent } from './/paperbag//paperbag.component';

const routes: Routes = [
  { path: 'Paperbag', component: PaperbagComponent },
  { path: 'Kraftbag', component: PaperbagComponent },
  { path: 'NonWovenbag', component: PaperbagComponent },
  { path: 'Jutebag', component: PaperbagComponent },
  { path: 'Totebag', component: PaperbagComponent },
  { path: 'Canvasbag', component: PaperbagComponent },
  { path: 'Drawstringbag', component: PaperbagComponent },
  { path: 'CottonStringbag', component: PaperbagComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class  Shoppingpromotionalbags { }
