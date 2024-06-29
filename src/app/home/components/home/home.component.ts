import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeServicesComponent } from '../home-services/home-services.component';
import { HomeSkillsComponent } from '../home-skills/home-skills.component';
import { HomeResumeComponent } from '../home-resume/home-resume.component';
import { HomePortfolioComponent } from '../home-portfolio/home-portfolio.component';
import { HomeBlogsComponent } from '../home-blogs/home-blogs.component';
import { HomeTestimonialsComponent } from '../home-testimonials/home-testimonials.component';
import { HomeContactComponent } from '../home-contact/home-contact.component';
import { HomeIntroComponent } from '../home-intro/home-intro.component';
import { HomeAboutComponent } from '../home-about/home-about.component';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    RouterLink,
    HomeServicesComponent,
    HomeSkillsComponent,
    HomeResumeComponent,
    HomePortfolioComponent,
    HomeBlogsComponent,
    HomeTestimonialsComponent,
    HomeContactComponent,
    HomeIntroComponent,
    HomeAboutComponent,
  ],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $('.style-switcher .toggle-btn').on('click', function () {
      $('.style-switcher').toggleClass('active');
    });
  }
}
