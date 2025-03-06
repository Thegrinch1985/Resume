import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  // Dynamically Generated Skills
  skills: string[] = [
    'Angular', 'TypeScript', 'JavaScript',
    'HTML5', 'CSS3', 'SCSS',
    '.NET', 'C#', 'Node.js',
    'RESTful APIs', 'GraphQL',
    'Docker', 'Kubernetes', 'Microsoft Azure',
    'Git', 'Agile Development',
    'Testing Frameworks: Karma, Jasmine, Cypress'
  ];

  // Function to Download Resume
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Howie_Lynch_Resume_January_2025.pdf'; // Path to your PDF file
    link.download = 'Howie_Lynch_Resume_January_2025.pdf'; // Name for the downloaded file
    link.click();
  }
}
