import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ExampleComponent } from './example.component';
import { BoardComponent } from './board/board.component';
import { ProcessElementsComponent } from './board/process-elements/process-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    BoardComponent,
    ProcessElementsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
