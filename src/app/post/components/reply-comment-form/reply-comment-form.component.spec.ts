import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyCommentFormComponent } from './reply-comment-form.component';

describe('ReplyCommentFormComponent', () => {
  let component: ReplyCommentFormComponent;
  let fixture: ComponentFixture<ReplyCommentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplyCommentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplyCommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
