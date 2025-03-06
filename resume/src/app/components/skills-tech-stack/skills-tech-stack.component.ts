import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-tech-stack',
  templateUrl: './skills-tech-stack.component.html',
  styleUrls: ['./skills-tech-stack.component.scss']
})
export class SkillsTechStackComponent {
  skillsCategories = [
    { name: 'Programming Languages', items: ['JavaScript', 'TypeScript', 'C#'] },
    { name: 'Frontend Technologies', items: ['Angular', 'HTML5', 'CSS3', 'SCSS'] },
    { name: 'Backend Technologies', items: ['.NET', 'Node.js', 'ASP.NET Core'] },
    { name: 'API Technologies', items: ['RESTful APIs', 'GraphQL'] },
    { name: 'Databases', items: ['SQL Server', 'MySQL', 'MongoDB', 'PostgreSQL'] },
    { name: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'Microsoft Azure'] },
    { name: 'Version Control & Workflow', items: ['Git', 'GitHub', 'GitLab', 'Agile Development'] },
    { name: 'Testing Frameworks', items: ['Karma', 'Jasmine', 'Cypress', 'Jest', 'Mocha', 'Selenium', 'xUnit'] },
    { name: 'Development Tools', items: ['VS Code', 'Visual Studio', 'Postman', 'Rider', 'Jira', 'Figma'] },
    { name: 'Soft Skills', items: ['Communication', 'Problem Solving', 'Collaboration', 'Time Management', 'Adaptability'] }
  ];
}
