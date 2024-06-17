import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { FormBuilder, FormGroup, FormsModule, NgForm, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule,FormsModule,CommonModule,ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements OnInit {
  //constructor(public dialog: MatDialog) {}
  contactForm: any;
  constructor(private fb: FormBuilder ,public dialog: MatDialog) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      requirement: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted successfully!');
      console.log(this.contactForm.value);
      // You can add form submission logic here, such as sending the form data to a server
      // Reset the form after submission
      this.contactForm.reset();
    } else {
      console.log('Form is invalid, please check all fields.');
    }
  }
  
  onLoad() {
    const url = window.location.href;
    const webUrlControl = this.contactForm.get('webUrl');
    if (webUrlControl) {
      webUrlControl.setValue(url);
    }
  }



}

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
//   standalone: true,
//   imports: [MatDialogModule, MatButtonModule],
// })
