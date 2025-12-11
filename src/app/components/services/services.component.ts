import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES } from '../../data/portfolio.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements AfterViewInit, OnDestroy {
  services = SERVICES;
  private observer: IntersectionObserver | null = null;
  private hasAnimated = false;

  ngAfterViewInit(): void {
    const servicesSection = document.querySelector('.services');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animateServiceCards();

            // Disconnect observer after animation triggers (run only once)
            if (this.observer) {
              this.observer.disconnect();
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (servicesSection) {
      this.observer.observe(servicesSection);
    }
  }

  private animateServiceCards(): void {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('card-animated');
      }, index * 200); // 200ms stagger between cards (Front-End, then Back-End)
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
