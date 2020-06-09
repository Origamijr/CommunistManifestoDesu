import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWidgetComponent } from './chat-widget.component';
import { ChatWidgetService } from './chat-widget.service';



@NgModule({
  declarations: [ChatWidgetComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ChatWidgetService
  ]
})
export class ChatWidgetModule { }
