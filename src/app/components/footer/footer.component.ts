import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-links">
          <a href="mailto:samaresh01maiti@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/samaresh-maiti/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com/samareshmaiti" target="_blank" rel="noopener">GitHub</a>
        </div>
        <p class="footer-copy">
          © {{ year }} - samaresh. Built with Angular-Typescript.
        </p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        border-top: 1px solid var(--border);
        padding: 2rem 0;
        margin-top: 4rem;
        background: var(--bg-soft);
      }

      .footer-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.75rem;
      }

      .footer-links {
        display: flex;
        gap: 1.5rem;
      }

      .footer-links a {
        font-weight: 500;
        font-size: 0.95rem;
      }

      .footer-copy {
        margin: 0;
        font-size: 0.85rem;
        color: var(--text-muted);
      }
    `,
  ],
})
export class FooterComponent {
  year = new Date().getFullYear();
}