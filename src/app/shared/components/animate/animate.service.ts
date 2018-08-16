import { Injectable } from '@angular/core';
import { AnimateObjComponent } from './animate-obj/animate-obj.component';

export interface AnimateWindow {
  width: number,
  height: number
}

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  private window: AnimateWindow;

  private elements: AnimateObjComponent[] = [];

  constructor() { }

  setWindow(height: number, width: number) {
    this.window = {
      height: height,
      width: width
    };
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
