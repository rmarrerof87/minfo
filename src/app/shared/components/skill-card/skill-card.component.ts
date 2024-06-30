import { Component, ViewEncapsulation, input } from '@angular/core';
import { Tecnology } from '../../models/project';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {
  data = input.required<Tecnology>();
}
