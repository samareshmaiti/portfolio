import { Experience } from '../models/experience.model';

export const EXPERIENCES: Experience[] = [
  {
    company: 'Capgemini Technology Services Pvt. Ltd.',
    role: 'Senior Software Developer',
    startDate: 'Dec 2024',
    endDate: 'Present',
    location: 'Bangalore, India',
    bullets: [
      'Led enhancements for cross-border payment clearing services processing 10K+ daily transactions by implementing ISO 20022-compliant Spring Boot microservices and Dockerized deployments.',
      'Designed and optimized PostgreSQL schemas, implemented Flyway migration scripts, and enhanced ISO 20022 payload enrichment for payment processing systems.',
      'Developed REST APIs and Spring Batch jobs for SWIFT payment channels, contributed to SR2025 migration, and strengthened application security using Spring Security while resolving production issues.',
    ],
  },
  {
    company: 'Allstate India Pvt. Ltd.',
    role: 'Developer Consultant',
    startDate: 'Apr 2022',
    endDate: 'Dec 2024',
    location: 'Bangalore, India',
    bullets: [
      'Designed and developed Spring Boot microservices and Angular applications, scaling platform traffic by 30% through onboarding of new provinces.',
      'Built RESTful APIs integrated with Angular HttpClient and RxJS, enabling efficient communication between internal and external systems.',
      'Reduced security vulnerabilities by 50% across backend services and achieved 80% unit test coverage using JUnit and Mockito.',
      'Developed proof-of-concept applications using Spring Boot and Angular to validate new business features and demonstrate end-to-end workflows.',
    ],
  },
  {
    company: 'CGI Information Systems',
    role: 'Software Developer',
    startDate: 'May 2019',
    endDate: 'Mar 2022',
    location: 'Bangalore, India',
    bullets: [
      'Developed and enhanced enterprise backend applications using Java and Spring Boot while resolving long-standing security vulnerabilities.',
      'Collaborated with business analysts and product owners to design and deliver new application features in Agile environments.',
      'Built responsive frontend modules using Angular Ionic and adopted Test-Driven Development (TDD) practices with JUnit to ensure code quality.',
    ],
  },
];