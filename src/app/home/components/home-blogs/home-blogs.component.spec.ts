import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlogsComponent } from './home-blogs.component';

describe('HomeBlogsComponent', () => {
  let component: HomeBlogsComponent;
  let fixture: ComponentFixture<HomeBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBlogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
