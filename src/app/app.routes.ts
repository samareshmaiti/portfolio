import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SwasthvaultDetailComponent } from './pages/swasthvault-detail/swasthvault-detail.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home — Samaresh' },
  { path: 'projects', component: ProjectsComponent, title: 'Projects — Samaresh' },
  {
    path: 'projects/swasthvault',
    component: SwasthvaultDetailComponent,
    title: 'SwasthVault — Case Study',
  },
  { path: 'projects/:slug', component: ProjectDetailComponent, title: 'Project — Samaresh' },
  { path: 'experience', component: ExperienceComponent, title: 'Experience — Samaresh' },
  { path: 'contact', component: ContactComponent, title: 'Contact — Samaresh' },
  { path: '**', redirectTo: '' },
];
