import { Component, OnInit, HostListener } from '@angular/core';
import { AnimateService, AnimateMouse } from '../animate.service';

@Component({
  selector: 'app-animate-field',
  templateUrl: './animate-field.component.html',
  styleUrls: ['./animate-field.component.scss']
})
export class AnimateFieldComponent implements OnInit {

  fps = 30;

  constructor(private animateService: AnimateService) {}

  ngOnInit(): void {

    // set service variables to communicate to components
    this.animateService.setMouse(0, 0, 0);

    let window = document.getElementsByClassName("animate-field")[0];
    this.animateService.setWindow(window.clientHeight, window.clientWidth);

    this.frame = this.frame.bind(this);
    setInterval(this.frame, 1000 / this.fps);
  }

  frame(): void {
    this.animateService.updateElements();
  }

  // React to a change in the mouse
  onMouseUpdate(event: MouseEvent) {
    // If performance is really an issue, I can look into octoganal distances
    this.animateService.setMouse(event.clientX, event.clientY, event.buttons);
  }

  // React to window size change
  @HostListener('window:resize', ['$event']) onResize(event) {
    let window = document.getElementsByClassName("animate-field")[0];
    this.animateService.setWindow(window.clientHeight, window.clientWidth);
  }
}
