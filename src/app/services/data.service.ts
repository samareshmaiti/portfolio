import { Injectable } from '@angular/core';
import { PROJECTS } from '../data/projects';
import { EXPERIENCES } from '../data/experience';
import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  getProjects(): Project[] {
    return PROJECTS;
  }

  getFeaturedProjects(): Project[] {
    return PROJECTS.filter((p) => p.featured);
  }

  getProjectBySlug(slug: string): Project | undefined {
    return PROJECTS.find((p) => p.slug === slug);
  }

  getExperiences(): Experience[] {
    return EXPERIENCES;
  }
}