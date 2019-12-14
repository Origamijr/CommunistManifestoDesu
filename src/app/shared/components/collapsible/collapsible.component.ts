import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {

  @Input() name: string;

  @ViewChild('content', {static: false}) content;

  collapsed: boolean = true;
  collapsibleHeight: string = '100px';

  icon: string = '+';

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.collapsibleHeight = this.content.nativeElement.offsetHeight + 'px';
    
    this.toggleCollapse();
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    
    if (this.collapsed) {
      this.icon = '+';
    } else {
      this.icon = '-';
    }
  }
}
