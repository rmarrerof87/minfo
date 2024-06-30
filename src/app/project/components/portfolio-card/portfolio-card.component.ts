import { Component, input } from '@angular/core';
import { Project } from '../../../shared/models/project';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css',
})
export class PortfolioCardComponent {
  data = input.required<Project>();
  imgSize = input<string>('default');
}
