import { Component, inject, input } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { Router } from '@angular/router';
import { Post } from '../../../shared/models/post';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  dataSrv = inject(DataService);
  router = inject(Router);
  data = input.required<Post>();
  imgSize = input<string>('default');
  type = input<'mini' | 'normal'>('normal');

  viewDetails(): void {
    this.dataSrv.selectPost(this.data());
    this.router.navigate(['/article-details']);
    sessionStorage.setItem('activePost', JSON.stringify(this.data()));
  }
}
