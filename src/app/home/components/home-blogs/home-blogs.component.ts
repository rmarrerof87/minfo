import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';
import { PostCardComponent } from '../../../post/components/post-card/post-card.component';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home-blogs',
  standalone: true,
  imports: [RouterLink, PostCardComponent, SlicePipe],
  templateUrl: './home-blogs.component.html',
  styleUrl: './home-blogs.component.css',
})
export class HomeBlogsComponent {
  dataSrv = inject(DataService);
  posts = this.dataSrv.posts;
}
