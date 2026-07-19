import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="section">
      <div class="container">
        <h1 class="section-title">Get in touch</h1>
        <p class="section-subtitle">
          Open to Java Backend/Full-Stack or dev-ops roles,, and technical
          conversations. The fastest way to reach me is email.
        </p>

        <div class="contact-grid" >
          <div class="contact-info" style="min-width: 600px!important;margin-left: 200px;">
            <!-- <h3>Direct</h3> -->
            <ul class="contact-links">
              <li>
                <strong>Email:</strong>
                <a href="mailto: samaresh01maiti@gmail.com">samaresh01maiti&#64;gmail.com</a>
              </li>
              <li>
                <strong>Phone:</strong>
                <a>+91 9686845085</a>
              </li>
              <li>
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/samaresh-maiti/" target="_blank" rel="noopener">
                https://www.linkedin.com/in/samaresh-maiti/
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>
                <a href="https://github.com/samareshmaiti" target="_blank" rel="noopener">
                https://github.com/samareshmaiti
                </a>
              </li>
            </ul>

            <p class="text-muted mt-2">
              Prefer email as well as social DMs for anything work-related.
            </p>
          </div>

          <!-- <form class="contact-form" (submit)="onSubmit($event)">
            <h3>Send a quick message</h3>
            <p class="text-muted form-hint">
              No backend — clicking "Send" opens your mail client with the
              details pre-filled.
            </p>

            <label>
              <span>Your name</span>
              <input type="text" name="name" [(ngModel)]="name" required>
            </label>

            <label>
              <span>Your email</span>
              <input type="email" name="email" [(ngModel)]="email" required>
            </label>

            <label>
              <span>Message</span>
              <textarea name="message" rows="5" [(ngModel)]="message" required></textarea>
            </label>

            <button type="submit" class="btn btn-primary">Send</button>
          </form> -->
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1.4fr;
        gap: 3rem;
        max-width: 980px;
        margin: 0 auto;
        align-items: start;
      }

      .contact-info h3,
      .contact-form h3 {
        margin: 0 0 2rem;
      }

      .contact-links {
        list-style: none;
        padding: 0;
      }

      .contact-links li {
        margin-bottom: 0.75rem;
        word-break: break-word;
      }

      .contact-links strong {
        display: inline-block;
        min-width: 80px;
        color: var(--text);
      }

      .contact-form {
        background: var(--bg-soft);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 2.75rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .form-hint {
        font-size: 0.85rem;
        margin: -0.5rem 0 0.5rem;
      }

      label {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text);
      }

      input,
      textarea {
        font-family: inherit;
        font-size: 0.95rem;
        padding: 0.6rem 0.75rem;
        border: 1px solid var(--border-strong);
        border-radius: var(--radius-sm);
        background: var(--bg);
        color: var(--text);
        transition: border-color var(--transition), box-shadow var(--transition);
      }

      input:focus,
      textarea:focus {
        outline: none;
        border-color: var(--accent);
        box-shadow: 0 0 0 3px rgba(22, 33, 62, 0.1);
      }

      button[type='submit'] {
        align-self: flex-start;
      }

      @media (max-width: 820px) {
        .contact-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }
    `,
  ],
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  onSubmit(event: Event): void {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${this.name || 'visitor'}`);
    const body = encodeURIComponent(
      `From: ${this.name} <${this.email}>\n\n${this.message}`,
    );
    window.location.href = `mailto:[PLACEHOLDER: your.email at example.com]?subject=${subject}&body=${body}`;
  }
}