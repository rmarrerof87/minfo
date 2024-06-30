import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioCardComponent } from '../../../project/components/portfolio-card/portfolio-card.component';
import { DataService } from '../../../shared/services/data.service';
import { NgClass, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home-portfolio',
  standalone: true,
  templateUrl: './home-portfolio.component.html',
  styleUrl: './home-portfolio.component.css',
  imports: [SlicePipe, NgClass, RouterLink, PortfolioCardComponent],
})
export class HomePortfolioComponent {
  dataSrv = inject(DataService);
  projects = this.dataSrv.projects;
}
