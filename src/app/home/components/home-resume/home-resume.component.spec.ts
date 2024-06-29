import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeResumeComponent } from './home-resume.component';

describe('HomeResumeComponent', () => {
  let component: HomeResumeComponent;
  let fixture: ComponentFixture<HomeResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
