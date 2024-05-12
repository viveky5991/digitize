import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: any;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required,Validators.pattern(/^[a-zA-Z .-]+$/)]],
      phone: ['',  [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      address:[''],
      message: ['', Validators.required]
    });
  }

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
}
