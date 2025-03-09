import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  aboutMeText: string[] = [
    "A dynamic Software Developer with six years of experience, I excel in front-end technologies, primarily Angular, and .NET for back-end services. My commitment to software excellence is underpinned by a disciplined approach to testing, utilizing frameworks like Karma, Jasmine for unit testing, and Cypress for integration tests.",
    "Expertise in cloud services is a key part of my skill set, with a strong background in managing and optimizing applications in Microsoft Azure environments. My experience as a .NET developer has equipped me with the skills to build scalable and secure back-end systems that support complex front-end applications.",
    "As a Scrum Master, I have successfully led a team of 8, guiding them through Agile methodologies to improve workflow and project delivery. My effective communication and strong collaborative skills ensure that I can align team efforts with business objectives seamlessly.",
    "In summary, my technical proficiency in Angular, .NET, and cloud services, combined with my leadership in Agile practices, positions me as an asset capable of contributing to high-performing development teams."
  ];

  hobbies: { name: string, description: string }[] = [
    { name: 'Coding', description: 'Passionate about writing clean, efficient, and scalable code while learning new technologies.' },
    { name: 'Music', description: 'A passion of mine is to relax and chill is listening to a various type of Music , I have an ever growing vinyl collection' },
    { name: 'Guitar', description: 'Another hobby of mind is I enjoy is playing guitar , been playing for about 20 years , love spending time to learn new songs' },
    { name: 'Gaming', description: 'Enjoys rpg video games, mainly story-driven, as a way to unwind ' }
  ];
}
