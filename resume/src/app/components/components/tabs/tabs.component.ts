import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  activeTab: number = 0; // Default to the first tab

  setActiveTab(index: number): void {
    this.activeTab = index;
  }

    // Method to download the resume PDF
    downloadResume() {
      const link = document.createElement('a');
      link.href = 'assets/Resume.pdf'; // Path to your PDF file
      link.download = 'John_Doe_Resume.pdf'; // Name for the downloaded file
      link.click();
    }
}
