import { AfterViewInit, Component, OnDestroy, inject } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { DatePipe } from '@angular/common';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { ReplyCommentFormComponent } from '../reply-comment-form/reply-comment-form.component';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [DatePipe, CommentFormComponent, ReplyCommentFormComponent],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css',
})
export class ArticleDetailsComponent implements OnDestroy {
  dataSrv = inject(DataService);
  post = this.dataSrv.activePost;

  ngOnDestroy(): void {
    this.dataSrv.clearSelectedPost();
    sessionStorage.removeItem('activePost');
  }
}
