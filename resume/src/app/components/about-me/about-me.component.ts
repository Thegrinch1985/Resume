import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  aboutMeText: string[] = [
    'Experienced Software Developer with 6+ years of expertise in building scalable front-end (Angular) and back-end (.NET) systems, grounded in strong fundamentals such as data structures, algorithms, asynchronous programming, object-oriented design.',
    'Skilled in developing and optimizing distributed systems in Microsoft Azure, with a focus on performance, security, and reliability.',
    'Proficient in writing well-tested code using frameworks like Karma, Jasmine, and Cypress to ensure quality across the development lifecycle.',
    'Passionate about leveraging AI tools and automation to streamline development workflows and drive efficiency.',
    'Effective communicator and collaborator with experience leading Agile teams as a Scrum Master, aligning team efforts with business objectives through clear direction and consistent feedback.',
  ];

  hobbies: { name: string; description: string }[] = [
    {
      name: 'Coding',
      description:
        'Passionate about writing clean, efficient, and scalable code while learning new technologies.',
    },
    {
      name: 'Music',
      description:
        'A passion of mine is to relax and chill is listening to a various type of Music , I have an ever growing vinyl collection',
    },
    {
      name: 'Guitar',
      description:
        'Another hobby of mind is I enjoy is playing guitar , been playing for about 20 years , love spending time to learn new songs',
    },
    {
      name: 'Gaming',
      description:
        'Enjoys rpg video games, mainly story-driven, as a way to unwind ',
    },
  ];
}
