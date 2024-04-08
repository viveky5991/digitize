import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PromotiontableComponent } from './/promotiontable//promotiontable.component';

const routes: Routes = [
  { path: 'PromotionTable', component: PromotiontableComponent },
  { path: 'ExhibitionCounters', component: PromotiontableComponent },
  { path: 'TentCanopyGazebo', component: PromotiontableComponent },
  { path: 'ParasolUmbrella', component: PromotiontableComponent },
  { path: 'TableCoverTableCloth', component: PromotiontableComponent },
  { path: 'SocialMediaFrame', component: PromotiontableComponent },
  { path: 'FoamBoard', component: PromotiontableComponent },
  { path: 'ShellSchemeBoothBranding', component: PromotiontableComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class  Exhibitionevents { }
