import { AfterViewInit, Component, signal } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './home-testimonials.component.html',
  styleUrl: './home-testimonials.component.css',
})
export class HomeTestimonialsComponent implements AfterViewInit {
  realIndex = signal<number>(1);
  slidesLength = signal<number>(1);
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
