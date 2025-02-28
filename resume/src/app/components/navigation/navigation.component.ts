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
    this.isLightMode = this.themeService.getSystemTheme() === 'light';
    this.applyTheme();
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
    this.isLightMode = !this.isLightMode;
    this.themeService.setDarkMode(!this.isLightMode);
    this.applyTheme();
  }

  applyTheme() {
    const theme = this.isLightMode ? 'light-theme' : 'dark-theme';
    this.renderer.setAttribute(document.body, 'class', theme);
  }

  get buttonText(): string {
    return this.isLightMode ? '🌙' : '🌞';
  }
}
