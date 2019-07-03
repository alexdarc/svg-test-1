import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardComponent } from './board.component';
import { EventElementComponent } from './event-element/event-element.component';
import { StartComponent } from './elements/start/start.component';
import { GatewayComponent } from './elements/gateway/gateway.component';
import { TaskComponent } from './elements/task/task.component';
import { EndComponent } from './elements/end/end.component';
import { SequenceFlowComponent } from './elements/sequence-flow/sequence-flow.component';
import { CoordsPipe } from './shared/pipes/coords.pipe';

@NgModule({
  declarations: [
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
    CommonModule
  ],
  exports: [BoardComponent],
})
export class BoardModule { }
