import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PopupsComponent } from './/popups//popups.component';

const routes: Routes = [
  { path: 'PopUps', component: PopupsComponent },
  { path: 'FabricPopUps', component: PopupsComponent },
  { path: 'RollupBanners', component: PopupsComponent },
  { path: 'XBanners', component: PopupsComponent },
  { path: 'BannersFlexFabric', component: PopupsComponent },
  { path: 'FenceBanners', component: PopupsComponent },
  { path: 'LamaStand', component: PopupsComponent }

 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class  Popupsrollupsbanners { }
