import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexfacelightboxComponent } from './/flexfacelightbox//flexfacelightbox.component';

const routes: Routes = [
  { path: 'FlexFace-LightBox', component: FlexfacelightboxComponent },
  { path: 'Fabric', component: FlexfacelightboxComponent },
  { path: 'Acrylic', component: FlexfacelightboxComponent },
  { path: 'Poster', component: FlexfacelightboxComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lightboxsignages { }
