import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-toggle-button',
  templateUrl: './filter-toggle-button.component.html',
  styleUrls: ['./filter-toggle-button.component.scss']
})
export class FilterToggleButtonComponent implements OnInit {

  @Output() toggled = new EventEmitter();

  active: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
    this.active = !this.active;
    this.toggled.emit(this.active);
  }

}
