import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownWrapperComponent } from './common/components/markdown-wrapper/markdown-wrapper.component';
import { AnimateFieldComponent } from './common/components/animate/animate-field/animate-field.component';
import { AnimateObjComponent } from './common/components/animate/animate-obj/animate-obj.component';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownWrapperComponent,
    AnimateFieldComponent,
    AnimateObjComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
