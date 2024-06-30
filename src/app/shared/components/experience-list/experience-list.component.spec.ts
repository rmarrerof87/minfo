import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceListComponent } from './experience-list.component';

describe('ExperienceListComponent', () => {
  let component: ExperienceListComponent;
  let fixture: ComponentFixture<ExperienceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
