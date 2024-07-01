import { Injectable, signal } from '@angular/core';
import { Comment, Post } from '../models/post';
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
  addComment(data: Comment): Comment {
    const tmpPost = this.activePost();
    if (tmpPost) {
      const newComment = { ...data, id: tmpPost.comments.length + 1 };
      tmpPost.comments.push(newComment);
      this.posts.update((val) => {
        const tmpList = [...val];
        const index = val.findIndex((e) => e.id === tmpPost.id);
        if (index !== -1) {
          tmpList[index] = { ...tmpPost };
        }
        return tmpList;
      });
      return newComment;
    }
    return data;
  }
}
