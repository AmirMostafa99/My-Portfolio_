import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `<app-header></app-header>
    <app-hero></app-hero>
    <app-services></app-services>
    <app-projects></app-projects>
    <app-skills></app-skills>
    <app-contact></app-contact>
    <app-footer></app-footer>`,
  styles: [],
})
export class AppComponent {
  title = 'Amir - Full Stack .NET Developer';
}
