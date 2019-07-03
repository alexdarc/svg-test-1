import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ExampleComponent } from './example.component';
import { BoardComponent } from './board/board.component';
import { EventElementComponent } from './board/event-element/event-element.component';
import { StartComponent } from './board/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    BoardComponent,
    EventElementComponent,
    StartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
