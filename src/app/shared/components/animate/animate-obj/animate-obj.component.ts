import { Component, OnInit } from '@angular/core';
import { AnimateService } from '../animate.service';
import { EventHandlerService, Mouse } from '../../event-handler/event-handler.service';

export interface AnimateBody {
  r: number,  // radius of collision
  vx: number,
  vy: number,
  ax: number,
  ay: number,
  elastic: number,
  drag: number,
  g: number,
}

export interface StyleMatrix {
  a: number,  // affine transformation matrix
  b: number,  // [ a c x ]
  c: number,  // [ b d y ]
  d: number,  // [ 0 0 1 ]
  x: number,
  y: number
}

@Component({
  selector: 'app-animate-obj',
  templateUrl: './animate-obj.component.html',
  styleUrls: ['./animate-obj.component.scss']
})
export class AnimateObjComponent implements OnInit {

  obj: AnimateBody = {
    r: 18,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    elastic: 0.75,
    drag: 0.02,
    g: 1.5
  }

  m: StyleMatrix = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    x: 50,
    y: 50
  }

  rot = 0;
  
  styleFrame: object = {
    m: this.matToStyleStr(this.m)
  };

  constructor(
    private animateService: AnimateService,
    private eventHandlerService: EventHandlerService
  ) { }

  ngOnInit() {
    this.animateService.addElement(this);
  }

  update(): void {
    this.rot = (this.rot + Math.PI / 90) % (2 * Math.PI);
    // let stretchx = 1 / (1 + Math.exp(-this.obj.vy));
    // let stretchy = 1 / stretchx;
    this.m.a = Math.cos(this.rot);
    this.m.d = this.m.a;
    this.m.c = Math.sin(this.rot);
    this.m.b = -this.m.c;

    // this.m.a *= stretchx;
    // this.m.b *= stretchx;
    // this.m.c *= stretchy;
    // this.m.d *= stretchy;

    // this.m.x = this.m.a * 1 + this.m.c * 18;
    // this.m.y = this.m.b * 1 + this.m.d * 18;

    this.styleFrame['m'] = this.matToStyleStr(this.m);

    let mouse: Mouse = this.eventHandlerService.getMouse();

    if (this.eventHandlerService.checkMouseButton(0) && this.distance(mouse.x, mouse.y, this.m.x, this.m.y) < 36) {
      // Reset velocities
      this.obj.vx = 0;
      this.obj.vy = 0;

      // Set velocities
      this.obj.ax = -this.obj.vx * this.obj.drag;
      this.obj.ay = -this.obj.vy * this.obj.drag;
      this.obj.vx += this.obj.ax + (mouse.x - this.m.x);
      this.obj.vy += this.obj.ay + (mouse.y - this.m.y);
    } else {
      this.obj.ax = -this.obj.vx * this.obj.drag;
      this.obj.ay = this.obj.g; // lol. no vertical drag
      this.obj.vx += this.obj.ax;
      this.obj.vy += this.obj.ay;
    }

    this.m.x += this.obj.vx;
    this.m.y += this.obj.vy;

    // border collision
    let height = this.animateService.getWindowHeight();
    let width = this.animateService.getWindowWidth();
    if (this.m.x + this.obj.r > width) {
      this.m.x = width - this.obj.r;
      this.obj.vx = -this.obj.vx * this.obj.elastic;
      this.obj.vx = Math.abs(this.obj.vx) < 1 ? 0 : this.obj.vx;
    }
    if (this.m.x - this.obj.r < 0) {
      this.m.x = this.obj.r;
      this.obj.vx = -this.obj.vx * this.obj.elastic;
      this.obj.vx = Math.abs(this.obj.vx) < 1 ? 0 : this.obj.vx;
    }
    if (this.m.y + this.obj.r > height) {
      this.m.y = height - this.obj.r;
      this.obj.vy = -this.obj.vy * this.obj.elastic;
      this.obj.vy = Math.abs(this.obj.vy) < 1 ? 0 : this.obj.vy;
    }
    if (this.m.y - this.obj.r < 0) {
      this.m.y = this.obj.r;
      this.obj.vy = -this.obj.vy * this.obj.elastic;
      this.obj.vy = Math.abs(this.obj.vy) < 1 ? 0 : this.obj.vy;
    }
  }
  
  matToStyleStr(m): string {
    return m.a + ',' + m.b + ',' + m.c + ',' + m.d + ',' + m.x + ',' + m.y;
  }
  
  distance(x1, y1, x2, y2): number {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  }

}
