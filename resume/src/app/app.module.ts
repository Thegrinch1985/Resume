import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsTechStackComponent } from './components/skills-tech-stack/skills-tech-stack.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    StartPageComponent,
    ResumeComponent,
    TabsComponent,
    AboutMeComponent,
    SkillsTechStackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
