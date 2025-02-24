import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {
  isLoading: boolean = true;
  isLightMode: boolean = true; // Default to light mode if not set in local storage

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Check local storage for theme
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.isLightMode = savedTheme === 'light';
    } else {
      // If no theme is stored, use system preference
      this.isLightMode = this.themeService.getSystemTheme() === 'light';
      localStorage.setItem('theme', this.isLightMode ? 'light' : 'dark'); // Save it for next time
    }

    // Apply the theme to the body
    this.applyTheme();

    // Simulate loading delay
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  // Apply theme classes to the body element
  applyTheme() {
    document.body.classList.toggle('light-mode', this.isLightMode);
    document.body.classList.toggle('dark-mode', !this.isLightMode);
  }
}
