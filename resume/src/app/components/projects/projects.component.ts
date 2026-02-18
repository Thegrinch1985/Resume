import { Component, OnDestroy, OnInit } from '@angular/core';
import { GithubService, Repository } from '../../services/github.service';
import { ThemeService } from 'src/app/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Array<{
    id: number;
    name: string;
    description: string | null;
    url: string;
    homepage: string | null;
    language: string | null;
    stars: number | null;
    forks: number | null;
  }> = [];

  private themeSubscription: Subscription | undefined;
  currentTheme: string = 'light';

  readonly githubProfileUrl = 'https://github.com/Thegrinch1985';
  githubMark = 'assets/githublight.png';

  isLoading: boolean = true;

  constructor(private githubService: GithubService, private themeService: ThemeService) {}

  ngOnInit(): void {
    const username = 'Thegrinch1985';

    this.themeSubscription = this.themeService.theme$.subscribe((theme) => {
      this.currentTheme = theme;
      this.githubMark = this.getThemeImage();
    });

    this.githubMark = this.getThemeImage();

    this.githubService
      .getRepositories(username, { perPage: 100, sort: 'updated', direction: 'desc' })
      .subscribe({
        next: (repos: Repository[]) => {
          const cleaned = repos
            .filter((r) => !r.fork)
            .filter((r) => !r.archived);

          this.projects = cleaned.map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description ?? null,
            url: repo.html_url,
            homepage: repo.homepage ? repo.homepage : null,
            language: repo.language ?? null,
            stars: typeof repo.stargazers_count === 'number' ? repo.stargazers_count : null,
            forks: typeof repo.forks_count === 'number' ? repo.forks_count : null,
          }));

          this.isLoading = false;
        },
        error: () => {
          this.projects = [];
          this.isLoading = false;
        },
      });
  }

  getThemeImage(): string {
    return this.currentTheme === 'dark' ? 'assets/githubdark.png' : 'assets/githublight.png';
  }

  ngOnDestroy(): void {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
