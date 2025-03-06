import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  hobbies: { name: string, description: string }[] = [
    { name: 'Coding', description: 'Passionate about writing clean, efficient, and scalable code while learning new technologies.' },
    { name: 'Music', description: 'Loves exploring various music genres, using music as inspiration and a way to unwind.' },
    { name: 'Guitar', description: 'Plays the guitar to explore different styles, from rock to acoustic, enhancing musical expression.' },
    { name: 'Gaming', description: 'Enjoys immersive video games, both competitive and story-driven, as a way to strategize and relax.' }
  ];
}
