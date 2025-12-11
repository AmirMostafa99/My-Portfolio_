import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  skills = SKILLS;
  private observer: IntersectionObserver | null = null;
  private hasAnimated = false;

  ngAfterViewInit(): void {
    const skillsSection = document.querySelector('.skills');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animateSkillIcons();

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

    if (skillsSection) {
      this.observer.observe(skillsSection);
    }
  }

  private animateSkillIcons(): void {
    const skillItems = document.querySelectorAll('.skill-item');

    skillItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('icon-animated');
      }, index * 80); // 80ms stagger between each icon
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
