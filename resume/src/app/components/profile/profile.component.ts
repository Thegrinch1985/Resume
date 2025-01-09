import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Navigate to the resume page after 5 seconds
    setTimeout(() => {
      this.router.navigate(['/tabs']);
    }, 5000); // 5000ms = 5 seconds
  }
}
