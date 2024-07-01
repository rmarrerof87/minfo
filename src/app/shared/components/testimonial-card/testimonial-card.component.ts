import { Component, input } from '@angular/core';
import { Testimonial } from '../../models/testimonial';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.css',
})
export class TestimonialCardComponent {
  data = input.required<Testimonial>();
}
