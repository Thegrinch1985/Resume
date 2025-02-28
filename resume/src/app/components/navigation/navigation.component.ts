import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLightMode: boolean = true;
  menuOpen: boolean = false;

  constructor(private themeService: ThemeService, private renderer: Renderer2) {}

  ngOnInit() {
    // Ensure the theme is applied right after checking the system theme
    const systemTheme = this.themeService.getSystemTheme();
    this.isLightMode = systemTheme === 'light';  // Determine if it's light mode or dark mode based on system theme
    this.applyTheme();  // Immediately apply the theme based on the system theme
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.menuOpen) {
      const clickedInside = (event.target as HTMLElement).closest('.nav-menu, .hamburger');
      if (!clickedInside) {
        this.closeMenu();
      }
    }
  }

  toggleDarkMode() {
    this.isLightMode = !this.isLightMode;  // Toggle the mode
    this.themeService.setDarkMode(!this.isLightMode);  // Update the theme in the service
    this.applyTheme();  // Apply the theme based on the new state
  }

  applyTheme() {
    const theme = this.isLightMode ? 'light-theme' : 'dark-theme';
    this.renderer.setAttribute(document.body, 'class', theme);  // Apply the theme to the body
  }

  get buttonText(): string {
    return this.isLightMode ? '🌙' : '🌞';  // Update the button text based on the mode
  }
}
