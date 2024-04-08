import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableflagsComponent } from './/tableflags//tableflags.component';

const routes: Routes = [
  { path: 'TableFlags', component: TableflagsComponent },
  { path: 'TableFlagsRoyal', component: TableflagsComponent },
  { path: 'ConferenceFlags', component: TableflagsComponent },
  { path: 'ConferenceFlagsHanging', component: TableflagsComponent }

 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Officeflags { }
