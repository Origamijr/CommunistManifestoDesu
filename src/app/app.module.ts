import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownWrapperComponent } from './common/markdown-wrapper/markdown-wrapper.component';
import { AnimateFieldComponent } from './common/animate/animate-field/animate-field.component';
import { AnimateObjComponent } from './common/animate/animate-obj/animate-obj.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownWrapperComponent,
    AnimateFieldComponent,
    AnimateObjComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
