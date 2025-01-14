import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  nameText = "Donkey Kong"; // The text to type out
  typedName: string[] = []; // Array to store each letter for animation
  private typingIndex = 0; // To track the current position in the text

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Start the typing effect
    this.startTypingEffect();

    // Navigate to the resume page after 5 seconds
    setTimeout(() => {
      this.router.navigate(['/start']);
    }, 5000); // 5000ms = 5 seconds
  }

  startTypingEffect(): void {
    if (this.typingIndex < this.nameText.length) {
      // Add the current letter to the typedName array
      this.typedName.push(this.nameText[this.typingIndex]);
      this.typingIndex++;

      // Delay and call the method recursively
      setTimeout(() => this.startTypingEffect(), 200); // Adjust typing speed (200ms per letter)
    }
  }
}
