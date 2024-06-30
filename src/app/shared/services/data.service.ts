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
  // http = inject(HttpClient);

  posts = signal<Post[]>(POSTS);
  projects = signal<Project[]>(PROJECTS);
  testimonials = signal<Testimonial[]>(TESTIMONIALS);
  skills = signal<Tecnology[]>(SKILLS);
  works = signal<Experience[]>(WORKS);
  education = signal<Experience[]>(EDUCATION);
}
