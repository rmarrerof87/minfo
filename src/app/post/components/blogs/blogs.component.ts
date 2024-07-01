import { Component, inject } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  dataSrv = inject(DataService);
  posts = this.dataSrv.posts;
}
