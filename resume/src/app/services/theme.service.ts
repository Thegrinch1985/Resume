import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>(this.getStoredTheme());
  theme$ = this.themeSubject.asObservable();

  constructor() {
    this.applyTheme(this.themeSubject.value);
    this.listenForSystemThemeChanges();
  }

  setDarkMode(isDarkMode: boolean): void {
    const newTheme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    this.themeSubject.next(newTheme);
    this.applyTheme(newTheme);
  }

  private getStoredTheme(): string {
    return localStorage.getItem('theme') || this.getSystemTheme();
  }

   getSystemTheme(): string {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private applyTheme(theme: string): void {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  private listenForSystemThemeChanges(): void {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const newTheme = event.matches ? 'dark' : 'light';
      if (!localStorage.getItem('theme')) {
        this.setDarkMode(newTheme === 'dark');
      }
    });
  }
}
