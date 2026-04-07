import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  skills: string[] = [
    'Angular', 'TypeScript', 'JavaScript',
    'HTML5', 'CSS3', 'SCSS',
    '.NET', 'C#', 'Node.js',
    'Java', 'Concurrency & Multithreading',
    'RESTful APIs', 'GraphQL',
    'Docker', 'Kubernetes', 'Microsoft Azure',
    'Kafka', 'Distributed Systems',
    'MySQL', 'SQL Databases',
    'iOS Development', 'Swift', 'SwiftUI',
    'Core Data', 'CloudKit', 'ShazamKit',
    'CI/CD (Xcode Cloud)', 'App Store Deployment',
    'Git', 'Agile Development', 'Scrum',
    'Testing Frameworks: Karma, Jasmine, Cypress'
  ];


  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'assets/Howie_Lynch_Resume_January_2025.pdf';
    link.download = 'Howie_Lynch_Resume_January_2025.pdf';
    link.click();
  }
}
