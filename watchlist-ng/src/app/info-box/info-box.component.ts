import { Component } from '@angular/core';
import { Project } from '../models/Project';
import { InfoSelectionService } from '../services/info-selection.service';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent {
  totalLength: number = 0;
  activeProject: Project = {
    name: '',
    time: 0,
    poster: '',
    released: '',
    characters: [],
    previous: [],
    format: ''
  };
  
  constructor(private infoSelectionService: InfoSelectionService){
    this.infoSelectionService.totalRuntime().subscribe(value => {
      this.totalLength = value;
    })
    this.infoSelectionService.getActive().subscribe(proj => {
      this.activeProject = proj;
    })
  }
}
