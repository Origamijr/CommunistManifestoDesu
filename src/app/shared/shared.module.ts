import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownWrapperComponent } from './components/markdown-wrapper/markdown-wrapper.component';
import { MarkdownModule } from 'ngx-markdown';
import { AnimateFieldComponent } from './components/animate/animate-field/animate-field.component';
import { AnimateObjComponent } from './components/animate/animate-obj/animate-obj.component';
import { HttpClientModule } from '@angular/common/http';
import { EventHandlerComponent } from './components/event-handler/event-handler.component';
import { FilterToggleButtonComponent } from './components/filter-toggle-button/filter-toggle-button.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    HttpClientModule
  ],
  declarations: [
    MarkdownWrapperComponent,
    AnimateFieldComponent,
    AnimateObjComponent,
    EventHandlerComponent,
    FilterToggleButtonComponent
  ],
  exports: [
    MarkdownWrapperComponent,
    AnimateFieldComponent,
    AnimateObjComponent,
    EventHandlerComponent,
    FilterToggleButtonComponent
  ],
})
export class SharedModule { }
