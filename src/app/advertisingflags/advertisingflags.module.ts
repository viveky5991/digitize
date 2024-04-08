import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SailflagsComponent } from './/sailflags//sailflags.component';

const routes: Routes = [
  { path: 'SailFlags', component: SailflagsComponent },
  { path: 'TearDropFlags', component: SailflagsComponent },
  { path: 'LShapeFlags', component: SailflagsComponent },
  { path: 'BladeFlags', component: SailflagsComponent },
  { path: 'TelescopicFlags', component: SailflagsComponent },
  { path: 'flag-base', component: SailflagsComponent }
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Advertisingflags { }
