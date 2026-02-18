import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent  {
  @ViewChild('scrollRoot', { static: true })
  private scrollRootRef!: ElementRef<HTMLElement>;

  activeYear = '';
  yearPulse = false;
  private yearObserver?: IntersectionObserver;
  private timelineItems: HTMLElement[] = [];
  private rafId: number | null = null;
  private pulseTimer: number | null = null;
  private onScroll = () => {
    if (this.rafId != null) return;
    this.rafId = window.requestAnimationFrame(() => {
      this.rafId = null;
      this.updateActiveYear();
    });
  };

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
        'Maintained Integration tests using Selenium to ensure application functioned as expected.',
        'Wrote test cases to ensure application worked as expected'
      ]
    }
  ];

  ngAfterViewInit(): void {
    this.setActiveYear(this.getYearLabel(this.experiences[0]?.duration ?? ''));

    const root = this.scrollRootRef.nativeElement;
    this.timelineItems = Array.from(
      root.querySelectorAll<HTMLElement>('.timeline-item')
    );

    if (this.timelineItems.length === 0) {
      return;
    }

    root.addEventListener('scroll', this.onScroll, { passive: true });

    this.yearObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.updateActiveYear();
        }
      },
      {
        root,
        threshold: 0,
      }
    );

    for (const item of this.timelineItems) {
      this.yearObserver.observe(item);
    }

    this.onScroll();
  }

  ngOnDestroy(): void {
    this.yearObserver?.disconnect();
    const root = this.scrollRootRef?.nativeElement;
    root?.removeEventListener('scroll', this.onScroll);
    if (this.rafId != null) {
      window.cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.pulseTimer != null) {
      window.clearTimeout(this.pulseTimer);
      this.pulseTimer = null;
    }
  }

  private updateActiveYear(): void {
    const root = this.scrollRootRef.nativeElement;
    const items = this.timelineItems;
    if (items.length === 0) return;

    const edgeEpsilonPx = 2;
    const atTop = root.scrollTop <= edgeEpsilonPx;
    const atBottom =
      root.scrollTop + root.clientHeight >= root.scrollHeight - edgeEpsilonPx;

    if (atTop) {
      const first = items[0]?.dataset['year'];
      if (first) this.setActiveYear(first);
      return;
    }

    if (atBottom) {
      const last = items[items.length - 1]?.dataset['year'];
      if (last) this.setActiveYear(last);
      return;
    }

    const rootRect = root.getBoundingClientRect();
    const rootCenterY = rootRect.top + rootRect.height * 0.5;

    let bestYear = '';
    let bestDistance = Number.POSITIVE_INFINITY;

    for (const item of items) {
      const rect = item.getBoundingClientRect();
      const isVisible = rect.bottom >= rootRect.top && rect.top <= rootRect.bottom;
      if (!isVisible) continue;

      const year = item.dataset['year'];
      if (!year) continue;

      const itemCenterY = rect.top + rect.height * 0.5;
      const distance = Math.abs(itemCenterY - rootCenterY);

      if (distance < bestDistance) {
        bestDistance = distance;
        bestYear = year;
      }
    }

    if (bestYear) {
      this.setActiveYear(bestYear);
    }
  }

  private setActiveYear(year: string): void {
    if (!year || year === this.activeYear) return;
    this.activeYear = year;

    this.yearPulse = true;
    if (this.pulseTimer != null) {
      window.clearTimeout(this.pulseTimer);
    }
    this.pulseTimer = window.setTimeout(() => {
      this.yearPulse = false;
      this.pulseTimer = null;
    }, 160);
  }

  getYearLabel(duration: string): string {
    const matches = duration.match(/\b\d{4}\b/g) ?? [];
    const years = Array.from(new Set(matches));

    if (years.length >= 1) {
      return years[0];
    }

    return /present/i.test(duration) ? 'Now' : '';
  }
}
