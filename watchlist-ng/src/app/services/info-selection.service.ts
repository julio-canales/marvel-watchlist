import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class InfoSelectionService {

  runtimeSubject = new BehaviorSubject<number>(0);
  runtime: number = 0;

  active: Project = {
    name: '',
    time: 0,
    poster: '',
    released: '',
    characters: [],
    previous: [],
    format: ''
  };
  activeSubject = new BehaviorSubject<Project>(this.active)

  constructor() {}

  addRuntime(time: number) {
    this.runtime += time;
    this.runtimeSubject.next(this.runtime);
  }

  removeRuntime(time: number) {
    this.runtime -= time;
    this.runtimeSubject.next(this.runtime);
  }

  totalRuntime(): BehaviorSubject<number>{
    return this.runtimeSubject;
  }

  setActive(proj: Project) {
    this.active = proj;
    this.activeSubject.next(this.active)
  }

  removeActive() {
    this.active = {
      name: '',
      time: 0,
      poster: '',
      released: '',
      characters: [],
      previous: [],
      format: ''
    };
    this.activeSubject.next(this.active)
  }

  getActive(): BehaviorSubject<Project> {
    return this.activeSubject;
  }
}
