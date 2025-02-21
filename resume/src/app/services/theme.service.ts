// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  // Set the theme based on user preference
  setDarkMode(isDarkMode: boolean): void {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  // Get the current theme from localStorage
  getTheme(): string {
    return localStorage.getItem('theme') || 'light';
  }

  // Set the theme based on system preference
  setThemeBasedOnSystemPreference(): void {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const isDarkMode = prefersDarkScheme.matches;
    this.setDarkMode(isDarkMode);
  }
}
