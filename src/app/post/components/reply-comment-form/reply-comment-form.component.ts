import { AfterViewInit, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Collapse, Ripple, initTWE } from 'tw-elements';

@Component({
  selector: 'app-reply-comment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reply-comment-form.component.html',
  styleUrl: './reply-comment-form.component.css',
})
export class ReplyCommentFormComponent implements AfterViewInit {
  commnentId = input.required<number>();

  ngAfterViewInit(): void {
    initTWE({ Collapse, Ripple });
  }
}
