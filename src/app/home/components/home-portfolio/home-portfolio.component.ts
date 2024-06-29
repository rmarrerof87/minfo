import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-portfolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-portfolio.component.html',
  styleUrl: './home-portfolio.component.css',
})
export class HomePortfolioComponent {}
