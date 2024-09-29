import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImgcontentComponent } from './imgcontent/imgcontent.component';


const routes: Routes = [

  { path: 'letter-heads', component: ImgcontentComponent },
  { path: 'envelopes', component: ImgcontentComponent },
  { path: 'folders', component: ImgcontentComponent },
  { path: 'notepads', component: ImgcontentComponent },
  // { path: 'notebooks', component: ImgcontentComponent },
  { path: 'thanks', component: ImgcontentComponent },
  { path: 'calendars', component: ImgcontentComponent },
  { path: 'booklets', component: ImgcontentComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]

})
export class ImgcontentModule { }
