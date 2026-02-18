import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  showLoadingScreen: boolean = true;
  showNavigation: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.updateNavigationVisibility();
      }
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showLoadingScreen = false;
    }, 3000);

    this.updateNavigationVisibility();
  }

  updateNavigationVisibility(): void {
    const currentUrl = this.router.url;
    this.showNavigation = currentUrl !== '/profile';
  }
}
