import { Injectable } from '@angular/core';
import { AnimateObjComponent } from './animate-obj/animate-obj.component';

export interface AnimateMouse {
  x: number,
  y: number,
  buttons: number
}

export interface AnimateWindow {
  width: number,
  height: number
}

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  private mouse: AnimateMouse;
  private window: AnimateWindow;

  private elements: AnimateObjComponent[] = [];

  constructor() { }

  setMouse(x: number, y: number, buttons: number): void {
    this.mouse = {
      x: x,
      y: y,
      buttons: buttons
    };
  }

  setWindow(height: number, width: number) {
    this.window = {
      height: height,
      width: width
    };
  }

  getMouse(): AnimateMouse {
    return this.mouse;
  }

  checkMouseButton(button: number): boolean {
    return ((this.mouse.buttons >> button) & 1) != 0;
  }

  getWindowHeight(): number {
    return this.window.height;
  }

  getWindowWidth(): number {
    return this.window.width;
  }

  addElement(element: AnimateObjComponent): void {
    this.elements.push(element);
  }

  updateElements(): void {
    this.elements.forEach((element) => element.update());
  }
}
