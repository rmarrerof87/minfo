import { Component, computed, inject } from '@angular/core';
import { PortfolioCardComponent } from '../portfolio-card/portfolio-card.component';
import { DataService } from '../../../shared/services/data.service';
import { NgClass, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [PortfolioCardComponent, NgClass, SlicePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  dataSrv = inject(DataService);
  projects = computed(() => {
    return this.dataSrv.projects().filter((e) => e.id !== 4);
  });
}
