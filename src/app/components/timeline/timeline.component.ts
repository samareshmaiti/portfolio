import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="timeline">
      @for (item of items; track item.company) {
        <div class="timeline-item">
          <div class="timeline-dot" aria-hidden="true"></div>
          <div class="timeline-content">
            <div class="timeline-meta">
              <span class="timeline-date">{{ item.startDate }} — {{ item.endDate }}</span>
              @if (item.location) {
                <span class="timeline-location">· {{ item.location }}</span>
              }
            </div>
            <h3 class="timeline-role">{{ item.role }}</h3>
            <p class="timeline-company">{{ item.company }}</p>
            <ul class="timeline-bullets">
              @for (bullet of item.bullets; track bullet) {
                <li>{{ bullet }}</li>
              }
            </ul>
          </div>
        </div>
      }
    </div>
  `,
  styles: [
    `
      .timeline {
        position: relative;
        padding-left: 1.5rem;
      }

      .timeline::before {
        content: '';
        position: absolute;
        left: 0.4rem;
        top: 0.5rem;
        bottom: 0.5rem;
        width: 2px;
        background: var(--border-strong);
      }

      .timeline-item {
        position: relative;
        margin-bottom: 2rem;
      }

      .timeline-dot {
        position: absolute;
        left: -1.5rem;
        top: 0.4rem;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--highlight);
        border: 3px solid var(--bg);
        box-shadow: 0 0 0 2px var(--highlight);
      }

      .timeline-meta {
        font-size: 0.85rem;
        color: var(--text-muted);
        margin-bottom: 0.25rem;
      }

      .timeline-role {
        margin: 0 0 0.15rem;
        font-size: 1.1rem;
      }

      .timeline-company {
        font-weight: 600;
        color: var(--accent);
        margin: 0 0 0.75rem;
      }

      .timeline-bullets {
        margin: 0;
      }
    `,
  ],
})
export class TimelineComponent {
  @Input({ required: true }) items: Experience[] = [];
}