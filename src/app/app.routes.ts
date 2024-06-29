import { Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'all-projects',
    loadComponent: () =>
      import('./project/components/projects/projects.component').then(
        (mod) => mod.ProjectsComponent
      ),
  },
  {
    path: 'project-single',
    loadComponent: () =>
      import('./project/components/project/project.component').then(
        (mod) => mod.ProjectComponent
      ),
  },
  {
    path: 'all-posts',
    loadComponent: () =>
      import('./post/components/blogs/blogs.component').then(
        (mod) => mod.BlogsComponent
      ),
  },
  {
    path: 'article-details',
    loadComponent: () =>
      import(
        './post/components/article-details/article-details.component'
      ).then((mod) => mod.ArticleDetailsComponent),
  },
];
