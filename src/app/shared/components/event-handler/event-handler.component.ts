import { Component, OnInit, HostListener } from '@angular/core';
import { EventHandlerService } from './event-handler.service';

@Component({
  selector: 'app-event-handler',
  templateUrl: './event-handler.component.html',
  styleUrls: ['./event-handler.component.scss']
})
export class EventHandlerComponent implements OnInit {

  constructor(private eventHandlerService: EventHandlerService) { }

  ngOnInit() {
    this.eventHandlerService.setMouse(0, 0, 0);
    this.eventHandlerService.setWindow(window.innerHeight, window.innerWidth);
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:mouseup', ['$event'])
  @HostListener('document:mousedown', ['$event'])
  onMouseUpdate(event: MouseEvent): void {
    this.eventHandlerService.setMouse(event.clientX, event.clientY, event.buttons);
  }

  @HostListener('window:resize', ['$event']) 
  onResize(event: any): void {
    this.eventHandlerService.setWindow(window.innerHeight, window.innerWidth);
  }
  
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    this.eventHandlerService.setKey(event.keyCode, true);
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    this.eventHandlerService.setKey(event.keyCode, false);
  }
}
