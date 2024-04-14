import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HighlightbookComponent } from './highlightbook/highlightbook.component';

const routes: Routes = [
  { path: 'brochures', component: HighlightbookComponent },
  { path: 'Tickets-Coupons', component: HighlightbookComponent },
  { path: 'Window-Films', component: HighlightbookComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HighlightbookModule { }
