import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  showLoadingScreen: boolean = true; // Controls loading screen visibility
  showNavigation: boolean = true; // Default to showing the navigation
  randomEffectClass: string = ''; // Holds the random effect class name

  constructor(private router: Router) {
    // Subscribe to router events to hide/show navigation and apply cube movement effect
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.updateNavigationVisibility();
        this.randomizeEffect();
      }
    });
  }

  ngOnInit(): void {
    // Show loading screen for 3 seconds before revealing the page
    setTimeout(() => {
      this.showLoadingScreen = false;
    }, 3000);

    // Initial check to set navigation visibility
    this.updateNavigationVisibility();
  }

  // Method to update the visibility of the navigation bar
  updateNavigationVisibility(): void {
    const currentUrl = this.router.url;
    this.showNavigation = currentUrl !== '/profile'; // Hide navigation on the profile page
  }

  // Randomize effect for cube movement on each route change
  randomizeEffect() {
    const direction = Math.random() > 0.5 ? 'left' : 'right'; // 50% chance to go left or right
    this.randomEffectClass = direction === 'left' ? 'move-left' : 'move-right';
  }
}
