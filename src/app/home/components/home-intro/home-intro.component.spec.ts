import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIntroComponent } from './home-intro.component';

describe('HomeIntroComponent', () => {
  let component: HomeIntroComponent;
  let fixture: ComponentFixture<HomeIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
