import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedService } from '../service/shared-service.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm: any;
  constructor(private fb: FormBuilder,private shared: SharedService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z .-]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      address: [''],
      message: ['', Validators.required],
      urlweb:[''],
      requirement:['']
    });
  }
  ngOnInit(): void { }
  onSubmit() {
    if (this.contactForm.valid) {
      // console.log('Form submitted successfully!');
      console.log(this.contactForm.value);
      this.shared.postData(this.contactForm.value).subscribe({
        next: (response) => {
         if(response.code === 2000)
          swal({icon: "success",title:response.message});
         this.contactForm.reset();
        },
        //  console.log('Message sent successfully') ,
        error: (error) => {
          if(error.status!==2000)
            console.log('Error sending message', error);
            swal({icon: "error",title:error.statusText});
            // alert(error.message);
        }
         
    });
      // You can add form submission logic here, such as sending the form data to a server
      // Reset the form after submission

    
    } else {
      swal({icon: "error",title:"Form is invalid!"});
      // console.log('Form is invalid, please check all fields.');
    }
  }
}
