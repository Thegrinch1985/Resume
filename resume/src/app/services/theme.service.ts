import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>(this.getStoredTheme());
  theme$ = this.themeSubject.asObservable(); // Expose observable for components to subscribe

  constructor() {
    this.applyTheme(this.themeSubject.value); // Apply the initial theme
    this.listenForSystemThemeChanges(); // Listen for system preference changes
  }

  // Toggle and apply the theme
  setDarkMode(isDarkMode: boolean): void {
    const newTheme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    this.themeSubject.next(newTheme); // Update observable
    this.applyTheme(newTheme);
  }

  // Retrieve the theme from localStorage or system preference
  private getStoredTheme(): string {
    return localStorage.getItem('theme') || this.getSystemTheme();
  }

  // Get system preference theme
   getSystemTheme(): string {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme to the document
  private applyTheme(theme: string): void {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  // Watch for system theme changes dynamically
  private listenForSystemThemeChanges(): void {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const newTheme = event.matches ? 'dark' : 'light';
      if (!localStorage.getItem('theme')) { // Only change if user hasn't manually selected a theme
        this.setDarkMode(newTheme === 'dark');
      }
    });
  }
}
