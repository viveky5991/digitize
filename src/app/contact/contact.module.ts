import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';

const routes: Routes = [
 
  { path: 'Contact',component: ContactComponent },
];
@NgModule({
  declarations: [
   
  ],
  imports: [
  
  ]
})

// declarations: [
//   AppComponent,
//   ContactFormComponent
// ],
// imports: [
//   BrowserModule,
//   FormsModule
// ],
// providers: [],
// bootstrap: [AppComponent]
export class ContactModule { }
