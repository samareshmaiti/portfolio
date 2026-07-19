import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <section class="section">
      <div class="container">
        <h1 class="section-title">Projects</h1>
        <p class="section-subtitle">
          A collection of work spanning backend services, full-stack apps, and
          tooling. Featured projects are highlighted at the top.
        </p>

        <div class="projects-grid">
          @for (project of projects(); track project.slug) {
            <app-project-card [project]="project"></app-project-card>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }
    `,
  ],
})
export class ProjectsComponent {
  constructor(private data: DataService) {}

  projects() {
    return this.data.getProjects();
  }
}