import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  aboutText: string = `Hi! I'm Donkey Kong, a passionate web developer with a knack for creating clean, responsive, and user-friendly web applications. 
    With expertise in Angular, TypeScript, and modern web technologies, I thrive on solving complex problems and bringing ideas to life.`;

  hobbies: string[] = ['Coding', 'Gaming', 'Hiking', 'Photography'];
}