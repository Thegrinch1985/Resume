// navigation.component.ts
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLightMode!: boolean; // Track whether it's light mode
  buttonText!: string; // Variable to store the button text

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Automatically apply the theme based on saved preference or system preference
    const currentTheme = this.themeService.getTheme();
    this.isLightMode = currentTheme === 'light'; // Set the mode based on the saved theme
    this.updateButtonText(); // Update button text based on the initial mode
  }

  // Toggle between light and dark modes
  toggleDarkMode() {
    this.isLightMode = !this.isLightMode; // Toggle the mode
    this.themeService.setDarkMode(!this.isLightMode); // Apply the new theme
    this.updateButtonText(); // Update the button text when the theme changes
  }

  // Update the button text based on the theme mode
  updateButtonText() {
    this.buttonText = this.isLightMode ? '🌙' : '🌞';
  }
}
