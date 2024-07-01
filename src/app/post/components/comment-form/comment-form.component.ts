import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../../shared/services/data.service';
import { Comment } from '../../../shared/models/post';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css',
})
export class CommentFormComponent {
  dataSrv = inject(DataService);
  fb = inject(FormBuilder);
  frm = this.fb.group({
    username: [''],
    text: [''],
  });

  addComment(): void {
    const data = this.frm.getRawValue();
    const newComment: Comment = {
      id: -1,
      created: new Date(),
      text: data.text ?? '',
      useravatar: 'img/blog/comment-author.png',
      username: data.username ?? '',
    };
    this.dataSrv.addComment(newComment);
    this.frm.reset();
  }
}
