import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';

  text = '';

  constructor(
    private markdownService: MarkdownService,
    private http: HttpClient
  ) {};

  ngOnInit(): void {
    this.http.get('assets/markdown/communist-manifesto.md', { responseType: 'text' }).subscribe((data) => {
      console.log(data);
      this.text = data;
    });
  }

  onLoad(event): void {
    console.log(event);
  }

  onError(error): void {
    console.log(event);
  }
}
