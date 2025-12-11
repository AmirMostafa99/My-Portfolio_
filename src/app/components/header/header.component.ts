import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  showBackToTop = false;
  private _onScroll = () => this.onWindowScroll();

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    // Prevent body scroll when mobile menu is open
    if (typeof document !== 'undefined') {
      if (this.isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  scrollToSection(sectionId: string): void {
    this.isMenuOpen = false;

    // Re-enable body scroll
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop(): void {
    this.isMenuOpen = false;

    // Re-enable body scroll
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }

    if (typeof window !== 'undefined' && window.scrollTo) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('scroll', this._onScroll, { passive: true });
      this.onWindowScroll();
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined' && window.removeEventListener) {
      window.removeEventListener('scroll', this._onScroll);
    }

    // Clean up body scroll lock if menu is open
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  private onWindowScroll(): void {
    if (typeof window === 'undefined') return;
    this.showBackToTop = window.scrollY > 300;
  }

  downloadCV(): void {
    this.isMenuOpen = false;

    // Re-enable body scroll
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }

    window.open(
      'https://drive.google.com/file/d/1u4V55LTYNw0okF04W0Sw-edIR2rKcZo8/view?usp=sharing',
      '_blank'
    );
  }
}
