import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home-intro',
  standalone: true,
  imports: [],
  templateUrl: './home-intro.component.html',
  styleUrl: './home-intro.component.css',
})
export class HomeIntroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    new Swiper('.logo-slider .swiper', {
      spaceBetween: 30,
      slidesPerView: 3,
      loop: true,
      speed: 3000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      allowTouchMove: false,
      breakpoints: {
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
      },
    });
  }
}
