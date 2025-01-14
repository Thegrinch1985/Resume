import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  showNavigation = true; // Default to showing the navigation
  randomEffectClass = ''; // This will hold the random effect class name

  constructor(private router: Router) {
    // Subscribe to router events and hide the navigation on the profile page
    this.router.events.subscribe((event: Event) => {
      if (this.isNavigationEnd(event)) { // Check if the event is NavigationEnd
        if (event.url === '/profile') {
          this.showNavigation = false; // Hide navigation on the profile page
        } else {
          this.showNavigation = true; // Show navigation on other pages
        }

        // Call randomize effect for cube movement
        this.randomizeEffect();
      }
    });
  }

  ngOnInit(): void {
    // Initial random effect when the component is loaded
    this.randomizeEffect();
  }

  // Type guard function to check if the event is of type NavigationEnd
  isNavigationEnd(event: Event): event is NavigationEnd {
    return event instanceof NavigationEnd;
  }

  // Randomize effect for cube movement on each route change
  randomizeEffect() {
    // Generate a random direction for cube movement
    const direction = Math.random() > 0.5 ? 'left' : 'right'; // 50% chance to go left or right

    this.randomEffectClass = direction === 'left' ? 'move-left' : 'move-right'; // Assign the class based on direction
  }
}
