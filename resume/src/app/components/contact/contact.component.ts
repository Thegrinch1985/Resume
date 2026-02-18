import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CONTACT_FORM_ENDPOINT } from '../../config/contact-form.config';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  isSending = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  submitMessage = '';

  private readonly formEndpoint = CONTACT_FORM_ENDPOINT;

  constructor(private readonly http: HttpClient) {}

  submitForm(form: NgForm) {
    this.submitStatus = 'idle';
    this.submitMessage = '';

    if (!this.name || !this.email || !this.message) {
      this.submitStatus = 'error';
      this.submitMessage = 'Please fill in all fields before submitting.';
      return;
    }

    if (!this.formEndpoint) {
      this.submitStatus = 'error';
      this.submitMessage = 'Form is not configured yet. Use the email link on the right, or set a form endpoint in contact-form.config.ts (Formspree/Getform/etc.).';
      return;
    }

    this.isSending = true;

    const payload = new FormData();
    payload.set('name', this.name);
    payload.set('email', this.email);
    payload.set('message', this.message);

    const headers = new HttpHeaders({
      Accept: 'application/json'
    });

    this.http.post(this.formEndpoint, payload, { headers }).subscribe({
      next: () => {
        this.submitStatus = 'success';
        this.submitMessage = `Thanks, ${this.name}! Your message has been sent.`;
        this.isSending = false;
        this.name = '';
        this.email = '';
        this.message = '';
        form.resetForm();
      },
      error: () => {
        this.submitStatus = 'error';
        this.submitMessage = 'Something went wrong sending your message. Please try again, or use the email/LinkedIn links.';
        this.isSending = false;
      }
    });
  }
}
