import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService, Repository } from '../../services/github.service';
import { ThemeService } from 'src/app/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: any[] = [];
  activeTab: string | undefined;
  private themeSubscription: Subscription | undefined;
  currentTheme: string = 'light';

  constructor(private githubService: GithubService, private themeService: ThemeService) {}

  ngOnInit(): void {
    const username = 'Thegrinch1985'; // Replace with your actual GitHub username
  
    // Subscribe to theme changes
    this.themeSubscription = this.themeService.theme$.subscribe((theme) => {
      this.currentTheme = theme;
      this.updateProjectImages();
    });
  
    // Fetch repositories
    this.githubService.getRepositories(username).subscribe((repos: Repository[]) => {
      // Custom sorting: Letters before numbers
      repos.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
  
        // If one starts with a letter and the other starts with a number
        const isALetter = /^[a-zA-Z]/.test(nameA);
        const isBLetter = /^[a-zA-Z]/.test(nameB);
  
        if (isALetter && !isBLetter) return -1; // A is a letter, B is a number → A first
        if (!isALetter && isBLetter) return 1;  // A is a number, B is a letter → B first
  
        // Default localeCompare for normal sorting
        return nameA.localeCompare(nameB);
      });
  
      this.projects = repos.map(repo => ({
        id: repo.name,
        title: repo.name,
        description: repo.description || 'No description provided.',
        imageUrl: this.getThemeImage(),
        url: repo.html_url // Adding the GitHub repository URL
      }));
  
      // Set the first project as active by default if available
      if (this.projects.length > 0) {
        this.activeTab = this.projects[0].id;
      }
    });
  }
  

  // Update project images when theme changes
  updateProjectImages(): void {
    this.projects = this.projects.map(project => ({
      ...project,
      imageUrl: this.getThemeImage()
    }));
  }

  // Get the correct image URL based on the theme
  getThemeImage(): string {
    return this.currentTheme === 'dark' ? 'assets/githubdark.png' : 'assets/githublight.png';
  }

  // Method to switch the active tab
  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }

  // Cleanup theme subscription
  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
