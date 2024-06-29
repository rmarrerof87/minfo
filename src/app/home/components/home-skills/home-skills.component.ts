import { AfterViewInit, Component, signal } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home-skills',
  standalone: true,
  imports: [],
  templateUrl: './home-skills.component.html',
  styleUrl: './home-skills.component.css',
})
export class HomeSkillsComponent implements AfterViewInit {
  realIndex = signal<number>(1);
  slidesLength = signal<number>(1);

  ngAfterViewInit(): void {
    new Swiper('.skills-slider .swiper', {
      spaceBetween: 30,
      slidesPerView: 2,
      loop: !1,
      speed: 800,
      breakpoints: {
        600: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: '#skill .button-next',
        prevEl: '#skill .button-prev',
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
