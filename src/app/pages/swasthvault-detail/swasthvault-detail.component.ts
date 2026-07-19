import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-swasthvault-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero -->
    <section class="detail-hero">
      <div class="container">
        <a routerLink="/projects" class="back-link">← Back to all projects</a>
        <p class="detail-eyebrow">Case Study · Featured Project</p>
        <h1 class="detail-title">SwasthVault</h1>
        <p class="detail-tagline">
          Secure health record manager with AI-driven personalized insights.
        </p>
        <div class="detail-meta">
          <span class="chip">Angular</span>
          <span class="chip">Spring Boot</span>
          <span class="chip">Spring Cloud</span>
          <span class="chip">Spring AI</span>
          <span class="chip">PostgreSQL</span>
          <span class="chip">Azure</span>
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="section">
      <div class="container detail-body">
        <h2>Overview</h2>
        <p>
          Now a days, after releasing a patient from hospital, the patient is given a discharge summary and a prescription.There is no secure way to followup with the patient and keep track of their health records and take appropriate actions.
          The patient has to keep track of all the medical records, prescriptions, and followup appointments on their own. This can be cumbersome and error-prone, especially if the patient has multiple doctors or hospitals involved in their care. 
          SwasthVault aims to solve this problem by providing a secure and user-friendly platform for managing health records and appointments.
          It also produces personalized health insights and recommendations based on the user's medical data, empowering them to make informed decisions about their health and
          well-being.
        </p>

        <h2>My Role</h2>
        <p>
          The solo developer and architect of SwasthVault, I designed and implemented the entire system, 
          including the frontend, backend, and AI-driven health insights. I also handled deployment and CI/CD setup on 
          Azure Kubernetes Service (AKS).
        </p>

        <h2>Architecture</h2>
        <p>
          SwasthVault is built as a microservice system.Spring Boot
          services run behind a Spring Cloud Gateway with Eureka for service
          discovery. Each service owns its own data and exposes a REST API.
          Cross-cutting concerns — authentication, logging, exception handling —
          are implemented consistently across services.
        </p>

        <div class="arch-grid">
          <div class="arch-tier arch-tier-edge">
            <h4>Edge</h4>
            <p>API Gateway · Eureka Discovery</p>
          </div>
          <div class="arch-tier arch-tier-services">
            <h4>Services</h4>
            <p>User · Patient · Doctor · Hospital · Health Record · Health Analysis · Payment · Notification</p>
          </div>
          <div class="arch-tier arch-tier-data">
            <h4>Data</h4>
            <p>PostgreSQL (per service) · Spring Data JPA · Redis (cache/sessions)</p>
          </div>
          <div class="arch-tier arch-tier-ai">
            <h4>AI</h4>
            <p>Spring AI · Retrieval-Augmented Generation over health records</p>
          </div>
        </div>

        <h2>Tech Stack</h2>
        <div class="tech-list">
          <div>
            <strong>Frontend</strong>
            <p>Angular, TypeScript, HTML, CSS</p>
          </div>
          <div>
            <strong>Backend</strong>
            <p>Spring Boot, Java, Spring Cloud, Spring Security, Spring Data JPA, Spring AI</p>
          </div>
          <div>
            <strong>Database</strong>
            <p>PostgreSQL</p>
          </div>
          <div>
            <strong>Authentication</strong>
            <p>JWT (JSON Web Tokens)</p>
          </div>
          <div>
            <strong>Deployment</strong>
            <p>Azure · Docker · Kubernetes</p>
          </div>
        </div>

        <h2>Key Features</h2>
        <ul>
          <li>Health record management: medical history, medications, allergies, appointments</li>
          <li>Regular health followup and reminders for patients</li>
          <li>Personalized health insights via Spring AI + RAG over medical records</li>
          <li>Secure encrypted storage with role-based access (patient / doctor / hospital)</li>
          <li>JWT-based authentication across all services via the gateway</li>
          <li>Centralized notifications (appointment reminders, prescription alerts)</li>
          <li>Payment service for consultation billing and subscriptions</li>
          <li>Doctor and hospital service discovery for matching patients with providers</li>
        </ul>

        <h2>Microservices Breakdown</h2>
        <div class="services-table">
          <div class="services-row services-head">
            <span>Service</span>
            <span>Responsibility</span>
          </div>
          <div class="services-row"><span>User Service</span><span>Registration, profile, auth</span></div>
          <div class="services-row"><span>Patient Service</span><span>Patient profiles, demographics</span></div>
          <div class="services-row"><span>Doctor Service</span><span>Doctor profiles, specialties, availability</span></div>
          <div class="services-row"><span>Hospital Service</span><span>Hospital records and affiliations</span></div>
          <div class="services-row"><span>Health Record Service</span><span>Medical history, allergies, medications, appointments</span></div>
          <div class="services-row"><span>Health Analysis Service</span><span>Personalized insights via Spring AI + RAG</span></div>
          <div class="services-row"><span>Payment Service</span><span>Billing, subscriptions, transactions</span></div>
          <div class="services-row"><span>Notification Service</span><span>Email/SMS/Whatsapp notifications and reminders</span></div>
          <div class="services-row"><span>API Gateway</span><span>Single entry point, routing, JWT validation</span></div>
          <div class="services-row"><span>Eureka Server</span><span>Service discovery and registration</span></div>
        </div>

        <h2>Highlights &amp; Outcomes</h2>
        <ul>
          <li>Onboarded 100+ test users across patient, doctor, and hospital roles</li>
          <li>Successfully tested real time patient followup</li>
          <li>Deployed end-to-end on AKS with Kubernetes manifests and GitHub Actions CI/CD</li>
          <li>Implements MCP Chatbot for personalized health insights using Spring AI and RAG over health records</li>
        </ul>

        <div class="links">
          <a href="https://github.com/samareshmaiti/Swasth-Vault" target="_blank" rel="noopener" class="btn btn-primary">View on GitHub</a>
          <a href="https://github.com/samareshmaiti/swasthvault-mcp" target="_blank" rel="noopener" class="btn btn-primary">MCP Chatbot Service</a>
          <a href="https://github.com/samareshmaiti/swasth-vault-questionaries" target="_blank" rel="noopener" class="btn btn-primary">Questionaries Service</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .detail-hero {
        background: linear-gradient(160deg, var(--accent) 0%, var(--secondary) 60%, var(--highlight) 130%);
        color: #fff;
        padding: 4rem 0 3rem;
      }

      .back-link {
        display: inline-block;
        color: rgba(255, 255, 255, 0.85);
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
        font-weight: 500;
      }

      .back-link:hover {
        color: #fff;
      }

      .detail-eyebrow {
        color: rgba(255, 255, 255, 0.85);
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        margin-bottom: 0.75rem;
      }

      .detail-title {
        color: #fff;
        font-size: clamp(2.5rem, 5vw, 3.5rem);
        margin: 0 0 0.5rem;
      }

      .detail-tagline {
        color: rgba(255, 255, 255, 0.85);
        font-size: 1.15rem;
        max-width: 720px;
        margin: 0 0 1.5rem;
      }

      .detail-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;
      }

      .detail-meta .chip {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.25);
        color: #fff;
      }

      .detail-body {
        max-width: 800px;
      }

      .detail-body h2 {
        margin-top: 2.5rem;
        font-size: 1.5rem;
        color: var(--text);
      }

      .arch-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
        margin: 1rem 0 2rem;
      }

      .arch-tier {
        background: var(--bg-soft);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 1rem 1.25rem;
      }

      .arch-tier h4 {
        margin: 0 0 0.4rem;
        font-size: 0.78rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--highlight);
      }

      .arch-tier p {
        margin: 0;
        font-size: 0.9rem;
      }

      .tech-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
        margin: 1rem 0 2rem;
      }

      .tech-list div {
        background: var(--bg-soft);
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        padding: 0.9rem 1.1rem;
      }

      .tech-list strong {
        display: block;
        font-size: 0.78rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--accent);
        margin-bottom: 0.25rem;
      }

      .tech-list p {
        margin: 0;
        font-size: 0.9rem;
      }

      .services-table {
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        overflow: hidden;
        margin: 1rem 0 2rem;
      }

      .services-row {
        display: grid;
        grid-template-columns: 1fr 2fr;
        padding: 0.7rem 1rem;
        border-bottom: 1px solid var(--border);
        font-size: 0.95rem;
      }

      .services-row:last-child {
        border-bottom: none;
      }

      .services-row span:first-child {
        font-weight: 600;
        color: var(--text);
      }

      .services-head {
        background: var(--bg-soft);
        font-size: 0.78rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--accent);
      }

      .links {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin-top: 2rem;
      }
    `,
  ],
})
export class SwasthvaultDetailComponent {}