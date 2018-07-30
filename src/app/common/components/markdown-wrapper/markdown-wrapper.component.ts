import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-markdown-wrapper',
  templateUrl: './markdown-wrapper.component.html',
  styleUrls: ['./markdown-wrapper.component.scss']
})
export class MarkdownWrapperComponent implements OnInit {

  @Input() filename: string;
  text = '';

  constructor(
    private http: HttpClient
  ) {};

  ngOnInit(): void {
    this.http.get(this.filename, { responseType: 'text' }).subscribe((data) => {
      this.text = data;
    });
  }
}
