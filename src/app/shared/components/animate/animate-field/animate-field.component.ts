import { Component, OnInit, HostListener } from '@angular/core';
import { AnimateService } from '../animate.service';
import { EventHandlerService } from '../../event-handler/event-handler.service';

@Component({
  selector: 'app-animate-field',
  templateUrl: './animate-field.component.html',
  styleUrls: ['./animate-field.component.scss']
})
export class AnimateFieldComponent implements OnInit {

  fps = 30;

  constructor(
    private animateService: AnimateService,
    private eventHandlerService: EventHandlerService
  ) {}

  ngOnInit(): void {

    // set service variables to communicate to components
    let window = document.getElementsByClassName("animate-field")[0];
    this.animateService.setWindow(window.clientHeight, window.clientWidth);

    this.frame = this.frame.bind(this);
    setInterval(this.frame, 1000 / this.fps);

    this.eventHandlerService.resetKeys(true);
  }

  frame(): void {
    this.animateService.updateElements();
    
    let keys = this.eventHandlerService.getKeys();
    let pressed = [];
    for (let i = 0; i < keys.length; i++) {
      if (keys[i]) pressed.push(i);
    }
    console.log(pressed);

    this.eventHandlerService.updateKeys();
  }

  // React to window size change
  @HostListener('window:resize', ['$event']) onResize(event) {
    let window = document.getElementsByClassName("animate-field")[0];
    this.animateService.setWindow(window.clientHeight, window.clientWidth);
  }
}
