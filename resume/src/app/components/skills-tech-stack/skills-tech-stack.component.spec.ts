import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTechStackComponent } from './skills-tech-stack.component';

describe('SkillsTechStackComponent', () => {
  let component: SkillsTechStackComponent;
  let fixture: ComponentFixture<SkillsTechStackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsTechStackComponent]
    });
    fixture = TestBed.createComponent(SkillsTechStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
