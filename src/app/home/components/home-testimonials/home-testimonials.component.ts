import { AfterViewInit, Component, inject, signal } from '@angular/core';
import Swiper from 'swiper';
import { DataService } from '../../../shared/services/data.service';
import { TestimonialCardComponent } from '../../../shared/components/testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-home-testimonials',
  standalone: true,
  imports: [TestimonialCardComponent],
  templateUrl: './home-testimonials.component.html',
  styleUrl: './home-testimonials.component.css',
})
export class HomeTestimonialsComponent implements AfterViewInit {
  realIndex = signal<number>(1);
  slidesLength = signal<number>(1);
  dataSrv = inject(DataService);
  testimonials = this.dataSrv.testimonials;

  ngAfterViewInit(): void {
    new Swiper('.testimonial-slider .swiper', {
      spaceBetween: 30,
      slidesPerView: 1,
      loop: false,
      speed: 800,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
      navigation: {
        nextEl: '.testimonial-slider-navigation .button-next',
        prevEl: '.testimonial-slider-navigation .button-prev',
      },
      on: {
        init: (sw) => {
          this.realIndex.set(sw.realIndex + 1);
          this.slidesLength.set(sw.slides.length);
        },
        slideChange: (sw) => {
          this.realIndex.set(sw.realIndex + 1);
          this.slidesLength.set(sw.slides.length);
        },
      },
    });
  }
}
