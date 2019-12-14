import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  filters = {
    "music": false,
    "graphics": false,
    "misc": false,

    "complete": false,
    "progress": false,
    "hiatus": false,
    
    "class": false,
    "research": false,
    "contest": false,
    "personal": false,

    "collab": false,
    "solo": false,

    "python": false,
    "c++": false,
    "c#": false,
    "f#": false,
    "java": false,

    "opengl": false,
    "pd": false,
    "unity": false,
    
    "game": false,
    "vr": false,
  }

  constructor() { }

  ngOnInit() {
  }

  setFilter(active: boolean, filter: string) {
    this.filters[filter] = active;
  }

  filtered(filters: string[]) {
    var groups = [
      ["music", "graphics", "misc"],
      ["complete", "progress", "hiatus"],
      ["personal", "class", "contest", "research"],
      ["solo", "collab"],
      ["python", "c++", "c#", "f#", "java"],
      ["unity", "blender", "opengl", "pd"],
      ["game", "vr"]
    ];
    
    for (const group of groups) {
      var filtering: boolean = false
      var filtered: boolean = true;
      for (const filter of group) {
        if (this.filters[filter]) {
          filtering = true;
        }
        if (this.filters[filter] && filters.includes(filter)) {
          filtered = false;
        }
      }
      if (filtering && filtered) return true;
    }

    return false;
  }
}
