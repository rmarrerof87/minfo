import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologyComponent } from './tecnology.component';

describe('TecnologyComponent', () => {
  let component: TecnologyComponent;
  let fixture: ComponentFixture<TecnologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TecnologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
