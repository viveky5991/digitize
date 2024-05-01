import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData: any = {};

  submitForm() {
    // Here you can handle the form submission logic, like sending data to a server
    console.log(this.formData);
    // Reset form after submission
    this.formData = {};
  }
}
