import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-home-blogs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-blogs.component.html',
  styleUrl: './home-blogs.component.css',
})
export class HomeBlogsComponent {
  dataSrv = inject(DataService);
  posts = this.dataSrv.posts;
}
