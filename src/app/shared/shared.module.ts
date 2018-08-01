import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownWrapperComponent } from './components/markdown-wrapper/markdown-wrapper.component';
import { MarkdownComponent, MarkdownModule } from '../../../node_modules/ngx-markdown';
import { AnimateFieldComponent } from './components/animate/animate-field/animate-field.component';
import { AnimateObjComponent } from './components/animate/animate-obj/animate-obj.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    HttpClientModule
  ],
  declarations: [
    MarkdownWrapperComponent,
    AnimateFieldComponent,
    AnimateObjComponent
  ],
  exports: [
    MarkdownWrapperComponent,
    AnimateFieldComponent,
    AnimateObjComponent
  ],
})
export class SharedModule { }
