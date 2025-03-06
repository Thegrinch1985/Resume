import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ResumeComponent } from './components/resume/resume.component';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsTechStackComponent } from './components/skills-tech-stack/skills-tech-stack.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { EducationComponent } from './components/education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    StartPageComponent,
    ResumeComponent,
    AboutMeComponent,
    SkillsTechStackComponent,
    WorkExperienceComponent,
    NavigationComponent,
    LoadingScreenComponent,
    ProjectsComponent,
    ContactComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
