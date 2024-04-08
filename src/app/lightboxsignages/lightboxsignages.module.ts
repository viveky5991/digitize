import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexfacelightboxComponent } from './/flexfacelightbox//flexfacelightbox.component';

const routes: Routes = [
  { path: 'FlexFaceLightBox', component: FlexfacelightboxComponent },
  { path: 'FabricLightBox', component: FlexfacelightboxComponent },
  { path: 'AcrylicLightBox', component: FlexfacelightboxComponent },
  { path: 'PosterLightBox', component: FlexfacelightboxComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Lightboxsignages { }
