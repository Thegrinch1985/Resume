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
}
