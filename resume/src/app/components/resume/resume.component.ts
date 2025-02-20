import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Howie_Lynch_Resume_January_2025.pdf'; // Path to your PDF file
    link.download = 'Howie_Lynch_Resume_January_2025.pdf'; // Name for the downloaded file
    link.click();
  }
}
