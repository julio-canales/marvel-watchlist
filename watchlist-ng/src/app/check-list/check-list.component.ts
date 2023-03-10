import { Component } from '@angular/core';
import { Project } from '../models/Project';
import { InfoSelectionService } from '../services/info-selection.service';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent {
  projects: Project[];

  constructor(
    private infoSelectionService: InfoSelectionService,
    private projectsService: ProjectsService) {
    this.projects = projectsService.PROJECTS;
  }

  boxClick(event: MouseEvent) {
    if (event.target instanceof HTMLInputElement) {
      let cb = event.target;
      if (cb.checked) {
        this.infoSelectionService.addRuntime(Number(cb.value));
      } else {
        this.infoSelectionService.removeRuntime(Number(cb.value));
      }
    }
  }

  setActive(proj: Project) {
    this.infoSelectionService.setActive(proj);
  }

  rmActive() {
    this.infoSelectionService.removeActive();
  }
}
