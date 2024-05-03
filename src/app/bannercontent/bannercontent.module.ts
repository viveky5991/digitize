import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BannercontentComponent } from './bannercontent/bannercontent.component';


const routes: Routes = [
  { path: 'binding', component: BannercontentComponent },
  { path: 'certificates', component: BannercontentComponent },
  { path: 'booklets', component: BannercontentComponent },
  { path: 'foil', component: BannercontentComponent }
 
];

@NgModule({
  declarations: [],
  imports: [
   
    RouterModule.forChild(routes),
    
  ]
})
export class BannercontentModule { }
