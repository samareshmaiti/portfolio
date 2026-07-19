import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from '../../components/timeline/timeline.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TimelineComponent],
  template: `
    <section class="section">
      <div class="container">
        <h1 class="section-title">Experience</h1>
        <p class="section-subtitle">
          A timeline of roles and projects. Most-recent first.
        </p>

        <div class="experience-wrapper">
          <app-timeline [items]="experiences()"></app-timeline>
        </div>
      </div>
    </section>

    <section class="section skills-section">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Languages</h3>
            <ul class="skill-list">
              <li>Java</li>
              <li>TypeScript</li>
              <li>SQL</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Frameworks & Libraries</h3>
            <ul class="skill-list">
              <li>Spring Boot</li>
              <li>Spring Cloud</li>
              <li>Spring AI</li>
              <li>LangChain4j</li>
              <li>LangGraph4j</li>
              <li>Angular</li>
              <li>Hibernate / JPA</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Tools & Platforms</h3>
            <ul class="skill-list">
              <li>PostgreSQL</li>
              <li>Redis</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Azure</li>
              <li>GitHub</li>
              <li>Jenkins / GitHub Actions</li>
              <li>Maven</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Concepts & Practices</h3>
            <ul class="skill-list">
              <li>Microservices Architecture</li>
              <li>RESTful APIs</li>
              <li>Event-Driven Architecture</li>
              <li>CI/CD Pipelines</li>
              <li>Test-Driven Development (TDD)</li>
              <li>Agile / Scrum</li>
              <li>REST & SOAP</li>
              <li>Design Patterns</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .experience-wrapper {
        max-width: 760px;
        margin: 0 auto;
      }
      .skills-section {
        background: var(--bg-soft);
        margin-top: 3rem;
        padding: 2.5rem 0;
      }
      .skills-section h2 {
        margin-bottom: 1.5rem;
        text-align: left;
      }
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin-top: 1rem;
      }
      .skill-category h3 {
        color: var(--accent);
        font-size: 1.1rem;
        margin-bottom: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .skill-list {
        list-style: none;
        padding: 0;
        margin: 0;
        line-height: 1.8;
        font-size: 0.95rem;
      }
      .skill-list li::before {
        content: "▹ ";
        color: var(--highlight);
      }
    `,
  ],
})
export class ExperienceComponent {
  constructor(private data: DataService) {}

  experiences() {
    return this.data.getExperiences();
  }
}
