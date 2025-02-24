import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLightMode: boolean = true; // Default to light mode

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isLightMode = this.themeService.getSystemTheme() === 'light';
  }

  // Toggle between light and dark mode
  toggleDarkMode() {
    this.isLightMode = !this.isLightMode;
    this.themeService.setDarkMode(!this.isLightMode);
  }

  // Use a getter for dynamic button text
  get buttonText(): string {
    return this.isLightMode ? '🌙' : '🌞';
  }
}
