import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent  {
  experiences = [
    {
      company: 'QUESTAX (CONTRACTED TO BMW GROUP)',
      location: 'Munich, Germany',
      role: 'Full Stack Developer',
      duration: 'June 2022 – Present',
      details: [
        'Collaborating on a significant project employing Angular and .NET, with containerization using Docker and orchestration via Kubernetes.',
        'Maintained high-quality code standards through rigorous unit and integration testing.',
        'Guided a team of 8 as a Scrum Master, conducting daily stand-ups, refining processes, and serving as the team leader in larger organisational meetings.',
        'Proficient in Cloud computing services, with a specialization in Microsoft Azure for application management, optimization, and deployment.',
        'Strong communicator adept at steering team collaboration toward meeting business objectives and driving successful project outcomes.'
      ]
    },
    {
      company: 'BEARING POINT',
      location: 'Dublin, Ireland',
      role: 'Full-stack Developer Consultant',
      duration: 'June 2019 – June 2022',
      details: [
        'Developed and enhanced user interfaces for BMW Group using Angular, focused on optimizing in-facility navigation capabilities.',
        'Conducted comprehensive testing of .NET back-end services, ensuring robust integration with vehicle management platforms via IoT solutions.',
        'Contributed to deployment strategies by incorporating Docker containerization, improving scalability and consistency across cloud-based infrastructures.',
        'Modernized legacy case management systems by integrating up-to-date technologies, including Angular for front-end and C# for back-end development, coupled with SQL Server for data management.'
      ]
    },
    {
      company: 'VHI HEALTHCARE',
      location: 'Dublin, Ireland',
      role: 'Intern',
      duration: 'January 2018 – September 2018',
      details: [
        'Maintained Integration tests using Selenium to ensure application functioned as expected.'
      ]
    }
  ];




  
}
