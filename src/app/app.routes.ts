import { Routes } from '@angular/router';
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ResumeComponent} from "./pages/resume/resume.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {AboutComponent} from "./pages/about/about.component";

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/about' }
];
