import { Injectable, signal } from '@angular/core';
import { Post } from '../models/post';
import { Project, Tecnology } from '../models/project';
import { Testimonial } from '../models/testimonial';
import {
  EDUCATION,
  POSTS,
  PROJECTS,
  SKILLS,
  TESTIMONIALS,
  WORKS,
} from '../models/consts';
import { Experience } from '../models/experience';

@Injectable()
export class DataService {
  constructor() {
    const activeProject = sessionStorage.getItem('activeProject');
    const activePost = sessionStorage.getItem('activePost');
    if (activeProject) {
      this.activeProject.set(JSON.parse(activeProject) as Project);
    }
    if (activePost) {
      this.activePost.set(JSON.parse(activePost) as Post);
    }
  }

  posts = signal<Post[]>(POSTS);
  projects = signal<Project[]>(PROJECTS);
  testimonials = signal<Testimonial[]>(TESTIMONIALS);
  skills = signal<Tecnology[]>(SKILLS);
  works = signal<Experience[]>(WORKS);
  education = signal<Experience[]>(EDUCATION);

  activeProject = signal<Project | null>(null);
  activePost = signal<Post | null>(null);

  selectProject(elem: Project): void {
    this.activeProject.set(elem);
  }
  clearSelectedProject(): void {
    this.activeProject.set(null);
  }
  selectPost(elem: Post): void {
    this.activePost.set(elem);
  }
  clearSelectedPost(): void {
    this.activePost.set(null);
  }
}
