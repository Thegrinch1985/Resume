import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLightMode: boolean = true;
  menuOpen: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.theme$.subscribe((theme) => {
      this.isLightMode = theme !== 'dark';
    });
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
    this.themeService.setDarkMode(this.isLightMode);
  }

  get buttonText(): string {
    return this.isLightMode ? '🌙' : '🌞';
  }
}
