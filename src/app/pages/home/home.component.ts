import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroComponent, ProjectCardComponent, SkillsComponent],
  template: `
    <app-hero></app-hero>

    <!-- Featured: SwasthVault spotlight -->
    <section class="section spotlight">
      <div class="container">
        <div class="spotlight-card">
          <div class="spotlight-banner">
            <span class="spotlight-eyebrow">Featured Case Study</span>
            <h2 class="spotlight-title">SwasthVault</h2>
            <p class="spotlight-tagline">
              Secure, AI-assisted health record management — 9 Spring Boot
              microservices, Spring AI + RAG, deployed on Azure.
            </p>
          </div>
          <div class="spotlight-body">
            <p class="spotlight-desc">
              SwasthVault helps users track medical history,Follow-up with patients, medications,
              allergies, and appointments, and surfaces personalized health
              insights through a retrieval-augmented AI layer. The platform is
              built as a microservice system behind an API gateway with Eureka
              service discovery, JWT-based authentication, and role-based access
              for patients, doctors, and hospitals. The app is enriched with with AI-powered features like health insights, symptom analysis, and personalized recommendations, leveraging Spring AI and RAG for accurate and context-aware responses.
            </p>
            <div class="spotlight-tech">
              <span class="chip">Angular</span>
              <span class="chip">Spring Boot</span>
              <span class="chip">Spring Cloud</span>
              <span class="chip">Spring AI</span>
              <span class="chip">PostgreSQL</span>
              <span class="chip">JWT</span>
              <span class="chip">Docker</span>
              <span class="chip">Kubernetes</span>
              <span class="chip">Azure</span>
              <span class="chip">Kafka</span>
              <span class="chip">Typescript</span>
            </div>
            <a routerLink="/projects/swasthvault" class="btn btn-primary">
              Read the case study →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Other featured projects -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Other Projects</h2>
        <p class="section-subtitle">A selection of recent work across backend, full-stack, and tooling.</p>

        <div class="projects-grid">
          @for (project of otherFeatured(); track project.slug) {
            <app-project-card [project]="project"></app-project-card>
          }
        </div>

        <div class="text-center mt-2">
          <a routerLink="/projects" class="btn btn-outline">See all projects</a>
        </div>
      </div>
    </section>

    <app-skills></app-skills>

    <!-- CTA -->
    <section class="section cta">
      <div class="container text-center">
        <h2 class="section-title">Let's build something together.</h2>
        <p class="section-subtitle">
          Open to Backend Engineering / Full Stack roles — full-time.
        </p>
        <a routerLink="/contact" class="btn btn-primary">Get in touch</a>
      </div>
    </section>
  `,
  styles: [
    `
      .spotlight-card {
        display: grid;
        grid-template-columns: 1fr 1.4fr;
        gap: 0;
        background: var(--bg);
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-md);
      }

      .spotlight-banner {
        background: linear-gradient(160deg, var(--accent) 0%, var(--secondary) 60%, var(--highlight) 130%);
        color: #fff;
        padding: 3rem 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .spotlight-eyebrow {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: rgba(255, 255, 255, 0.85);
        margin-bottom: 0.75rem;
      }

      .spotlight-title {
        color: #fff;
        font-size: clamp(2rem, 3vw, 2.75rem);
        margin: 0 0 0.5rem;
      }

      .spotlight-tagline {
        color: rgba(255, 255, 255, 0.85);
        margin: 0;
        font-size: 1rem;
      }

      .spotlight-body {
        padding: 2.5rem;
      }

      .spotlight-desc {
        margin: 0 0 1.25rem;
      }

      .spotlight-tech {
        margin-bottom: 1.5rem;
      }

      .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
      }

      .cta {
        background: var(--bg-soft);
        padding-bottom: 5rem;
      }

      @media (max-width: 820px) {
        .spotlight-card {
          grid-template-columns: 1fr;
        }

        .spotlight-banner {
          padding: 2rem 1.5rem;
        }

        .spotlight-body {
          padding: 1.75rem 1.5rem;
        }
      }
    `,
  ],
})
export class HomeComponent {
  constructor(private data: DataService) {}

  otherFeatured() {
    return this.data.getFeaturedProjects().filter((p) => p.slug !== 'swasthvault');
  }
}