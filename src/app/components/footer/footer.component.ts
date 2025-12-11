import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SOCIAL_LINKS } from '../../data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  socialLinks = SOCIAL_LINKS;
  currentYear = new Date().getFullYear();
}
