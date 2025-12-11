import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects = PROJECTS;
  visibleProjects = PROJECTS;
  currentIndex = 0; // Made public for template access
  private readonly visibleCount = 3; // Show 3 cards at once
  private sliderIntervalId: any;
  private readonly autoSlideInterval = 20000; // 20 seconds

  // Get total number of pagination dots (positions)
  get totalPositions(): number {
    return this.projects.length;
  }

  // Get array for pagination dots
  get paginationDots(): number[] {
    return Array(this.totalPositions)
      .fill(0)
      .map((_, i) => i);
  }

  ngOnInit(): void {
    this.updateVisibleProjects();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  // Navigation methods
  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.updateVisibleProjects();
    this.resetAutoSlide();
  }

  prev(): void {
    this.currentIndex = this.currentIndex === 0 ? this.projects.length - 1 : this.currentIndex - 1;
    this.updateVisibleProjects();
    this.resetAutoSlide();
  }

  goTo(index: number): void {
    this.currentIndex = index;
    this.updateVisibleProjects();
    this.resetAutoSlide();
  }

  private updateVisibleProjects(): void {
    const result: any[] = [];

    // Always show exactly 3 projects with proper wrapping
    for (let i = 0; i < this.visibleCount; i++) {
      const index = (this.currentIndex + i) % this.projects.length;
      result.push(this.projects[index]);
    }

    this.visibleProjects = result;
  }

  private startAutoSlide(): void {
    this.sliderIntervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
      this.updateVisibleProjects();
    }, this.autoSlideInterval);
  }

  private stopAutoSlide(): void {
    if (this.sliderIntervalId) {
      clearInterval(this.sliderIntervalId);
    }
  }

  private resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
