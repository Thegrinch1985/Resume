import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
  encapsulation: ViewEncapsulation.None // Shared styles will now apply
})
export class WorkExperienceComponent {
  experiences = [
    {
      company: 'Tech Corp',
      role: 'Frontend Developer',
      duration: 'Jan 2020 - Present',
      details: [
        'Developed and maintained the company website using Angular.',
        'Collaborated with designers to create responsive and user-friendly UI.',
        'Improved application performance by 25% through code optimization.'
      ],
      expanded: true // Add this property
    },
    {
      company: 'Web Solutions',
      role: 'Web Developer',
      duration: 'Jun 2018 - Dec 2019',
      details: [
        'Built e-commerce websites using HTML, CSS, and JavaScript.',
        'Implemented SEO strategies to improve website rankings.',
        'Integrated third-party APIs to enhance functionality.'
      ],
      expanded: true // Add this property
    }
  ];

  toggleAccordion(index: number) {
    this.experiences[index].expanded = !this.experiences[index].expanded;
  }
}
