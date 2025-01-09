import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-tech-stack',
  templateUrl: './skills-tech-stack.component.html',
  styleUrls: ['./skills-tech-stack.component.scss']
})
export class SkillsTechStackComponent {
  skills: string[] = ['JavaScript', 'TypeScript', 'Angular', 'HTML', 'CSS/SCSS', 'Node.js', 'Git'];
  tools: string[] = ['VS Code', 'Webpack', 'Jira', 'Postman', 'Figma'];
}
