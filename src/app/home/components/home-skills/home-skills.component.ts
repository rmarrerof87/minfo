import { AfterViewInit, Component, inject, signal } from '@angular/core';
import Swiper from 'swiper';
import { SkillCardComponent } from '../../../shared/components/skill-card/skill-card.component';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-home-skills',
  standalone: true,
  templateUrl: './home-skills.component.html',
  styleUrl: './home-skills.component.css',
  imports: [SkillCardComponent],
})
export class HomeSkillsComponent implements AfterViewInit {
  realIndex = signal<number>(1);
  slidesLength = signal<number>(1);
  dataSrv = inject(DataService);

  skills = this.dataSrv.skills;

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
