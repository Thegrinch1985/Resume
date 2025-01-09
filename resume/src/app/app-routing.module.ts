import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'tabs', component: TabsComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' }, // Default to profile page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }