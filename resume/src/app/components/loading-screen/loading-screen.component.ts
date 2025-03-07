import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {
  isLoading: boolean = true;
  isLightMode: boolean = true;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.isLightMode = savedTheme === 'light';
    } else {
      this.isLightMode = this.themeService.getSystemTheme() === 'light';
      localStorage.setItem('theme', this.isLightMode ? 'light' : 'dark');
    }

    this.applyTheme();

    setTimeout(() => {
      this.isLoading = false;
    }, 3500);
  }

  applyTheme() {
    document.body.classList.toggle('light-mode', this.isLightMode);
    document.body.classList.toggle('dark-mode', !this.isLightMode);
  }
}
