import { Component, inject, input } from '@angular/core';
import { Project } from '../../../shared/models/project';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css',
})
export class PortfolioCardComponent {
  dataSrv = inject(DataService);
  router = inject(Router);
  data = input.required<Project>();
  imgSize = input<string>('default');

  viewDetails(): void {
    this.dataSrv.selectProject(this.data());
    this.router.navigate(['/project-single']);
    sessionStorage.setItem('activeProject', JSON.stringify(this.data()));
  }
}
