import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-blogs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-blogs.component.html',
  styleUrl: './home-blogs.component.css',
})
export class HomeBlogsComponent {}
