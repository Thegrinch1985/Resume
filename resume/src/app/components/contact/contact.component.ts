import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  submitForm() {
    if (this.name && this.email && this.message) {
      alert(`Thank you, ${this.name}! Your message has been received.`);
   
    } else {
      alert("Please fill in all fields before submitting.");
    }
  }
}
