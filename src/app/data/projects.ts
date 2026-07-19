import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'swasthvault',
    name: 'SwasthVault',
    tagline: 'Secure health record manager with AI-driven personalized insights',
    description:
      'SwasthVault is a secure, user-friendly health record manager and advisor that helps users track medical history, medications, allergies, and appointments. It provides personalized health insights and recommendations powered by Spring AI + RAG.',
    techStack: [
      'Angular',
      'TypeScript',
      'Spring Boot',
      'Java',
      'Spring Cloud',
      'Spring Security',
      'Spring Data JPA',
      'Spring AI',
      'PostgreSQL',
      'JWT',
      'Docker',
      'Kubernetes',
      'Azure',
    ],
    role: 'Solo developer and architect, responsible for end-to-end design, development, and deployment of the application.',
    featured: true,
    // githubUrl: '[PLACEHOLDER: github url]',
    // liveUrl: '[PLACEHOLDER: live demo url]',
    highlights: [
      'Architected 9 Spring Boot microservices behind an API gateway with Eureka service discovery',
      'Implemented JWT-based authentication and role-based access control (patient, doctor, hospital)',
      'Integrated Spring AI + RAG for personalized health insights from medical records',
      'Deployed to Azure with Docker + Kubernetes orchestration',
    ],
  },
  
  {
    slug: 'agent-pipeline',
    name: 'Agent Pipeline',
    tagline: 'AI agent pipeline with RAG, memory, and tool calling',
    description: 'A sophisticated AI-powered chatbot application built with Spring Boot, Spring AI, LangChain4j, and LangGraph4j. Features Retrieval-Augmented Generation (RAG), conversation memory, JWT authentication, document processing, and tool integration.',
    techStack: [
      'Spring Boot',
      'Spring AI',
      'LangChain4j',
      'LangGraph4j',
      'PostgreSQL',
      'JWT',
      'Ollama (qwen2.5:0.5b)'
    ],
    role: 'Solo developer and architect, responsible for end-to-end design, development, and deployment',
    featured: false,
    githubUrl: 'https://github.com/samareshmaiti/LangGraph-RAG',
    liveUrl: '[PLACEHOLDER]',
  }
  
];