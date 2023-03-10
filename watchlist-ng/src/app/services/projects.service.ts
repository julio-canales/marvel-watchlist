import { Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

   PROJECTS: Project[] = [
    {
      name: "Iron Man (2008)",
      time: 128,
      poster: "https://xl.movieposterdb.com/08_03/2008/371746/xl_371746_4243f899.jpg?v=2023-03-08%2021:06:31",
      released: "May 2nd 2008",
      characters: ["Iron Man", "Nick Fury", "War Machine"],
      previous: [],
      format: "Film: 2 hours 8 minutes"
    }
  ]

  constructor() { }
}
