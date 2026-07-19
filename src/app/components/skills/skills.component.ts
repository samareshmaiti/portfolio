import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section section-alt">
      <div class="container">
        <h2 class="section-title">Skills &amp; Tools</h2>
        <p class="section-subtitle">
          A focused stack built around Java and Spring, with modern tools for the
          rest of the lifecycle.
        </p>

        <div class="skills-grid">
          @for (group of groups; track group.category) {
            <div class="skills-group">
              <h3 class="skills-category">{{ group.category }}</h3>
              <div class="skills-items">
                @for (item of group.items; track item) {
                  <span class="chip">{{ item }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }

      .skills-group {
        background: var(--bg);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 1.25rem;
      }

      .skills-category {
        margin: 0 0 0.75rem;
        font-size: 0.85rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--accent);
      }

      .skills-items {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;
      }
    `,
  ],
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      category: 'Languages',
      items: ['Java', 'TypeScript', 'Python', 'SQL'],
    },
    {
      category: 'Frameworks',
      items: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'Spring Data JPA', 'Spring AI', 'Angular'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'Redis'],
    },
    {
      category: 'DevOps & Cloud',
      items: ['Docker', 'Kubernetes', 'Azure', 'GitHub Actions', 'CI/CD'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Maven', 'Gradle', 'IntelliJ IDEA', 'Postman'],
    },
    {
      category: 'Practices',
      items: ['Microservices', 'REST APIs', 'JWT Auth', 'RAG', 'JPA/Hibernate'],
    },
  ];
}