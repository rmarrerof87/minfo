import { Component } from '@angular/core';
import { PortfolioCardComponent } from '../portfolio-card/portfolio-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PortfolioCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
