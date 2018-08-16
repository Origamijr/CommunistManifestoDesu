import { Injectable } from '@angular/core';

export interface Mouse {
  x: number,
  y: number,
  buttons: number
}

export interface WindowSize {
  width: number,
  height: number
}

export interface Keys {
  keys: boolean[],
  pressed: number[],
  released: number[],
  next: boolean[]
}

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {

  private mouse: Mouse;
  private window: WindowSize;
  private keys: Keys;

  constructor() { }

  // Mouse
  setMouse(x: number, y: number, buttons: number): void {
    this.mouse = {
      x: x,
      y: y,
      buttons: buttons
    };
  }

  getMouse(): Mouse {
    return this.mouse;
  }

  checkMouseButton(button: number): boolean {
    return ((this.mouse.buttons >> button) & 1) != 0;
  }

  
  // Window
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


  // Keyboard
  resetKeys(manual: boolean): void {
    this.keys = {
      keys: new Array(221).fill(false),
      pressed: new Array(221).fill(0),
      released: new Array(221).fill(0),
      next: manual ? new Array(221).fill(false) : null
    };
  }

  setKey(key: number, state: boolean): void {
    // console.log(key + (state ? " ON" : " OFF"));
    if (this.keys.next == null) {
      this.keys.pressed[key] = 0;
      this.keys.released[key] = 0;
    }
    if (state) {
      this.keys.keys[key] = true;
      this.keys.pressed[key]++;
      if (this.keys.next != null) {
        this.keys.next[key] = true;
      }
    } else {
      this.keys.released[key]++;
      if (this.keys.next == null) {
        this.keys.keys[key] = false;
      } else {
        this.keys.next[key] = false;
      }
    }
  }

  updateKeys(): void {
    if (this.keys.next != null) {
      this.keys.pressed = new Array(221).fill(0);
      this.keys.released = new Array(221).fill(0);
      this.keys.keys = this.keys.next;
    }
  }

  getKeys(): boolean[] {
    return this.keys.keys;
  }

  getPressed(): number[] {
    return this.keys.pressed;
  }

  getReleased(): number[] {
    return this.keys.released;
  }

  keyDown(key: number): boolean {
    return this.keys.keys[key];
  }

  keyPressed(key: number): boolean {
    return this.keys.pressed[key] !== 0;
  }

  keyReleased(key: number) : boolean {
    return this.keys.released[key] !== 0;
  }
}
