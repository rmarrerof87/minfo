import { Component, input } from '@angular/core';
import { Experience } from '../../models/experience';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.css',
})
export class ExperienceListComponent {
  experiences = input.required<Experience[]>();
}
