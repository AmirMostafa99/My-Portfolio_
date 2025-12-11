import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SOCIAL_LINKS } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  socialLinks = SOCIAL_LINKS;

  scrollToProjects(): void {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadCV(): void {
    // You can replace this URL with your actual CV file
    window.open(
      'https://drive.google.com/file/d/1u4V55LTYNw0okF04W0Sw-edIR2rKcZo8/view?usp=sharing',
      '_blank'
    );
  }
}
