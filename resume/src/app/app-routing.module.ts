import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsTechStackComponent } from './components/skills-tech-stack/skills-tech-stack.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';


const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'start', component: StartPageComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'skills', component: SkillsTechStackComponent },
  { path: 'work', component: WorkExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'education', component: EducationComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }, // Default to start page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }