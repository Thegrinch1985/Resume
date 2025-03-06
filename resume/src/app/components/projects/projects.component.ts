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
  displayedProjects: any[] = [];
  activeTab: string | undefined;
  private themeSubscription: Subscription | undefined;
  currentTheme: string = 'light';

  currentIndex: number = 0;
  itemsPerPage: number = 3;
  isLoading: boolean = true; // New loading state

  constructor(private githubService: GithubService, private themeService: ThemeService) {}

  ngOnInit(): void {
    const username = 'Thegrinch1985';
  
    this.themeSubscription = this.themeService.theme$.subscribe((theme) => {
      this.currentTheme = theme;
      this.updateProjectImages();
    });
  
    this.githubService.getRepositories(username).subscribe((repos: Repository[]) => {
      setTimeout(() => { 
        this.isLoading = false;
  
        repos.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          const isALetter = /^[a-zA-Z]/.test(nameA);
          const isBLetter = /^[a-zA-Z]/.test(nameB);
  
          if (isALetter && !isBLetter) return -1;
          if (!isALetter && isBLetter) return 1;
          return nameA.localeCompare(nameB);
        });
  
        this.projects = repos.map(repo => ({
          id: repo.name,
          title: repo.name.length > 8 ? repo.name.substring(0, 8) + '...' : repo.name, // Truncate name,
          imageUrl: this.getThemeImage(),
          url: repo.html_url
        }));
  
        if (this.projects.length > 0) {
          this.activeTab = this.projects[0].id;
        }
  
        this.updateDisplayedProjects();
      }, 2000);
    });
  }
  

  updateProjectImages(): void {
    this.projects = this.projects.map(project => ({
      ...project,
      imageUrl: this.getThemeImage()
    }));
    this.updateDisplayedProjects();
  }

  getThemeImage(): string {
    return this.currentTheme === 'dark' ? 'assets/githubdark.png' : 'assets/githublight.png';
  }

  nextProjects(): void {
    if (this.currentIndex + this.itemsPerPage < this.projects.length) {
      this.currentIndex += this.itemsPerPage;
    } else {
      this.currentIndex = 0;
    }
    this.updateDisplayedProjects();
  }

  prevProjects(): void {
    if (this.currentIndex - this.itemsPerPage >= 0) {
      this.currentIndex -= this.itemsPerPage;
    } else {
      this.currentIndex = this.projects.length - (this.projects.length % this.itemsPerPage || this.itemsPerPage);
    }
    this.updateDisplayedProjects();
  }

  updateDisplayedProjects(): void {
    this.displayedProjects = this.projects.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
