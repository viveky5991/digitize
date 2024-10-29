import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { FormBuilder, FormGroup, FormsModule, NgForm, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedService } from '../service/shared-service.service';
import swal from 'sweetalert';
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
//  data: any;

  constructor(private fb: FormBuilder ,public dialog: MatDialog,private shared:SharedService,  public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {

  }

  ngOnInit(): void {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$")]],
      requirement: ['', Validators.required],
      urlweb:[this.data.webUrl],
      message: ['', Validators.required],
      address: ['']
    });
    console.log("this.data.webUrl",this.data);
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // console.log('Form submitted successfully!');
      // console.log(this.contactForm.value);

      this.shared.postData(this.contactForm.value).subscribe({
        next: (response) => {
          if(response.code===2000)
            swal({icon: "success",title:response.message});
          //alert(response.message);
          // console.log('Message sent successfully');
          // Reset the form after successful submission
          this.contactForm.reset();
        },
        error: (error) => {
          if(error.status!==2000)
          console.log('Error sending message', error);
          swal({icon: "error",title:'Unable to reach the server. Please try again later.'});
          // alert(error.message);
        }
      });
    } else {
      console.log('Form is invalid, please check all fields.');
    }
  }





}

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
//   standalone: true,
//   imports: [MatDialogModule, MatButtonModule],
// })
