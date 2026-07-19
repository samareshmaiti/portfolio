import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="detail-hero" *ngIf="project; else notFound">
      <div class="container">
        <a routerLink="/projects" class="back-link">← Back to all projects</a>
        <h1 class="detail-title">{{ project.name }}</h1>
        <p class="detail-tagline">{{ project.tagline }}</p>
        <div class="detail-meta">
          <span class="chip" *ngFor="let tech of project.techStack | slice:0:5">{{ tech }}</span>
          <span class="chip" *ngIf="project.techStack.length > 5">+{{ project.techStack.length - 5 }} more</span>
        </div>
      </div>
    </section>

    <ng-template #notFound>
      <section class="section">
        <div class="container">
          <h2>Project not found</h2>
          <p>The requested project could not be found.</p>
          <a routerLink="/projects" class="btn btn-outline">Back to Projects</a>
        </div>
      </section>
    </ng-template>

    <section class="section" *ngIf="project">
      <div class="container detail-body">
        <h2>Overview</h2>
        <p>{{ project.description }}</p>

        <h2>My Role</h2>
        <p>{{ project.role }}</p>

        <h2>Tech Stack</h2>
        <div class="tech-list">
          <div *ngFor="let tech of project.techStack">
            <span class="chip">{{ tech }}</span>
          </div>
        </div>

        <div *ngIf="project.githubUrl && !project.githubUrl.startsWith('[PLACEHOLDER')">
          <a [href]="project.githubUrl" target="_blank" rel="noopener" class="btn btn-primary">View on GitHub →</a>
        </div>
        <div *ngIf="project.liveUrl && !project.liveUrl.startsWith('[PLACEHOLDER')">
          <a [href]="project.liveUrl" target="_blank" rel="noopener" class="btn btn-primary ms-2">Live Demo →</a>
        </div>

        <div *ngIf="project.highlights && project.highlights.length > 0" class="mt-4">
          <h2>Key Features</h2>
          <ul>
            <li *ngFor="let highlight of project.highlights">{{ highlight }}</li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .detail-hero {
      background: linear-gradient(160deg, var(--accent) 0%, var(--secondary) 60%, var(--highlight) 130%);
      color: #fff;
      padding: 4rem 0 3rem;
      text-align: center;
    }
    .back-link {
      display: inline-block;
      color: rgba(255,255,255,0.85);
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
      font-weight: 500;
    }
    .back-link:hover { color: #fff; }
    .detail-title { color: #fff; font-size: clamp(2.5rem, 5vw, 3.5rem); margin: 0 0 0.5rem; }
    .detail-tagline { color: rgba(255,255,255,0.85); font-size: 1.15rem; max-width: 720px; margin: 0 0 1.5rem; }
    .detail-meta { display: flex; flex-wrap: wrap; gap: 0.3rem; justify-content: center; margin-bottom: 2rem; }
    .detail-meta .chip { background: rgba(255,255,255,0.15); border-color: rgba(255,255,255,0.25); color: #fff; }
    .section { padding: 2rem 0; }
    .container { max-width: 800px; margin: 0 auto; padding: 0 1rem; }
    .detail-body h2 { margin-top: 2.5rem; font-size: 1.5rem; color: var(--text); }
    .detail-body p { line-height: 1.6; color: var(--text); margin-bottom: 1rem; }
    .tech-list { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem; }
    .tech-list .chip { background: var(--bg-soft); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 0.5rem 0.75rem; font-size: 0.9rem; }
    .btn { display: inline-block; margin-top: 1.5rem; padding: 0.75rem 1.5rem; border-radius: var(--radius-md); font-weight: 600; text-decoration: none; transition: background 0.2s; }
    .btn-primary { background: var(--accent); color: #fff; }
    .btn-primary:hover { background: var(--secondary); }
    .btn-outline { border: 2px solid var(--accent); color: var(--accent); background: transparent; }
    .btn-outline:hover { background: var(--accent); color: #fff; }
    .ms-2 { margin-left: 0.5rem; }
    .mt-4 { margin-top: 2rem; }
    @media (max-width: 600px) {
      .detail-hero { padding: 3rem 0 2rem; }
      .detail-title { font-size: 2rem; }
    }
  `]
})
export class ProjectDetailComponent {
  project: Project | undefined;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.project = this.dataService.getProjectBySlug(slug);
    }
  }
}
