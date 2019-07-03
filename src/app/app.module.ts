import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BoardComponent } from './board/board.component';
import { EventElementComponent } from './board/event-element/event-element.component';
import { StartComponent } from './board/start/start.component';
import { GatewayComponent } from './board/gateway/gateway.component';
import { TaskComponent } from './board/task/task.component';
import { EndComponent } from './board/end/end.component';
import { SequenceFlowComponent } from './board/sequence-flow/sequence-flow.component';

import { CoordsPipe } from './shared/pipes/coords.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    EventElementComponent,
    StartComponent,
    GatewayComponent,
    TaskComponent,
    EndComponent,
    SequenceFlowComponent,
    CoordsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
