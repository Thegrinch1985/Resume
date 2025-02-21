import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-tech-stack',
  templateUrl: './skills-tech-stack.component.html',
  styleUrls: ['./skills-tech-stack.component.scss']
})
export class SkillsTechStackComponent {
  skills: string[] = ['JavaScript', 'TypeScript', 'Angular', 'HTML', 'CSS/SCSS', 'Node.js', 'Git'];
  tools: string[] = ['VS Code', 'Webpack', 'Jira', 'Postman', 'Figma'];
  frameworks: string[] = ['Angular', 'React', 'Vue.js', 'Express.js'];
  databases: string[] = ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite'];
  versionControl: string[] = ['Git', 'GitHub', 'GitLab', 'Bitbucket'];
  cloudServices: string[] = ['AWS', 'Azure', 'Google Cloud Platform', 'Heroku'];
  testingTools: string[] = ['Jest', 'Mocha', 'Cypress', 'Selenium'];
  devopsTools: string[] = ['Docker', 'Kubernetes', 'Terraform', 'Jenkins'];
  softSkills: string[] = ['Communication', 'Problem Solving', 'Collaboration', 'Time Management', 'Adaptability'];
  
}
