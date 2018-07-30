import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animate-field',
  templateUrl: './animate-field.component.html',
  styleUrls: ['./animate-field.component.css']
})
export class AnimateFieldComponent implements OnInit {

  fps = 30;

  field;

  mouse = {
    x: 0,
    y: 0,
    buttons: 0
  }

  clicked: boolean = false;

  obj = {
    r: 18,
    vx: 0,
    vy: 0,
    ax: 0,
    ay: 0,
    elastic: 0.75,
    drag: 0.01,
    g: 1.5
  }

  m = {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    x: 50,
    y: 50
  }
  rot = 0;
  styleFrame : object = {
    m: this.matToStyleStr(this.m)
  };
  style: object;

  ngOnInit(): void {
    this.field = document.getElementsByClassName("animate-field")[0];
    this.frame = this.frame.bind(this);
    setInterval(this.frame, 1000 / this.fps);
  }

  matToStyleStr(m): string {
    return m.a + ',' + m.b + ',' + m.c + ',' + m.d + ',' + m.x + ',' + m.y;
  }

  frame(): void {

    // this.styleFrame['rotation'] = (this.styleFrame['rotation'] + 5) % 360;
    // var styleStr = JSON.stringify(this.styleFrame);

    this.rot = (this.rot + Math.PI / 90) % (2 * Math.PI);
    // var stretchx = 0.5 * Math.cos(2 * this.rot) + 1;
    // var stretchy = 0.5 * Math.cos(this.rot) + 1;
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

    if (this.checkMouseButton(this.mouse, 0) && this.distance(this.mouse.x, this.mouse.y, this.m.x, this.m.y) < 36) {
      if (!this.clicked) {
        this.obj.vx = 0;
        this.obj.vy = 0;
      }
      this.obj.ax = -this.obj.vx * this.obj.drag;
      this.obj.ay = -this.obj.vy * this.obj.drag;
      this.obj.vx += this.obj.ax + (this.mouse.x - this.m.x);
      this.obj.vy += this.obj.ay + (this.mouse.y - this.m.y);
    } else {
      this.obj.ax = -this.obj.vx * this.obj.drag;
      this.obj.ay = this.obj.g; // lol. no vertical drag
      this.obj.vx += this.obj.ax;
      this.obj.vy += this.obj.ay;
    }

    this.m.x += this.obj.vx;
    this.m.y += this.obj.vy;

    // border collision
    if (this.m.x + this.obj.r > this.field.clientWidth) {
      this.m.x = this.field.clientWidth - this.obj.r;
      this.obj.vx = -this.obj.vx * this.obj.elastic;
      this.obj.vx = Math.abs(this.obj.vx) < 1 ? 0 : this.obj.vx;
    }
    if (this.m.x - this.obj.r < 0) {
      this.m.x = this.obj.r;
      this.obj.vx = -this.obj.vx * this.obj.elastic;
      this.obj.vx = Math.abs(this.obj.vx) < 1 ? 0 : this.obj.vx;
    }
    if (this.m.y + this.obj.r > this.field.clientHeight) {
      this.m.y = this.field.clientHeight - this.obj.r;
      this.obj.vy = -this.obj.vy * this.obj.elastic;
      this.obj.vy = Math.abs(this.obj.vy) < 1 ? 0 : this.obj.vy;
    }
    if (this.m.y - this.obj.r < 0) {
      this.m.y = this.obj.r;
      this.obj.vy = -this.obj.vy * this.obj.elastic;
      this.obj.vy = Math.abs(this.obj.vy) < 1 ? 0 : this.obj.vy;
    }
    // if (this.m.x - this.obj.r < this.field)

    // var rotationInd = styleStr.indexOf('--rotation') + 12;
    // while (!isNaN(parseInt(styleStr[rotationInd]))) rotationInd++;
    // styleStr = [styleStr.slice(0, rotationInd), 'deg', styleStr.slice(rotationInd)].join('');
    // this.style = JSON.parse(styleStr);
  }

  checkMouseButton(mouse, button): boolean {
    return ((mouse.buttons >> button) & 1) != 0;
  }

  distance(x1, y1, x2, y2): number {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  }

  onMouseUpdate(event: MouseEvent) {
    this.mouse.x = event.x;
    this.mouse.y = event.y;
    this.mouse.buttons = event.buttons;
  }
}
