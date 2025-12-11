import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  contact = CONTACT;
  isVisible = false;
  private observer: IntersectionObserver | null = null;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Create IntersectionObserver to trigger animations
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.isVisible) {
            this.isVisible = true;
            this.animateCards();
            // Disconnect observer after first trigger
            this.observer?.disconnect();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Start observing the contact section
    const contactSection = this.elementRef.nativeElement.querySelector('.contact');
    if (contactSection) {
      this.observer.observe(contactSection);
    }
  }

  private animateCards(): void {
    const cards = this.elementRef.nativeElement.querySelectorAll('.contact-card');

    cards.forEach((card: HTMLElement, index: number) => {
      setTimeout(() => {
        card.classList.add('card-animated');
      }, index * 200);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
