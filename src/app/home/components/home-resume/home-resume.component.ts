import { Component, inject } from '@angular/core';
import { ExperienceListComponent } from '../../../shared/components/experience-list/experience-list.component';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-home-resume',
  standalone: true,
  templateUrl: './home-resume.component.html',
  styleUrl: './home-resume.component.css',
  imports: [ExperienceListComponent],
})
export class HomeResumeComponent {
  dataSrv = inject(DataService);
  works = this.dataSrv.works;
  education = this.dataSrv.education;
}
