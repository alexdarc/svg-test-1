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
import { WaypointsPipe } from './shared/pipes/waypoints.pipe';
import { DragAndDropModule } from './../shared/modules/drag-and-drop/drag-and-drop.module';
import {DependencyContainer} from "../DependencyContainer";

@NgModule({
  declarations: [
    BoardComponent,
    EventElementComponent,
    StartComponent,
    GatewayComponent,
    TaskComponent,
    EndComponent,
    SequenceFlowComponent,
    CoordsPipe,
    WaypointsPipe,
  ],
  imports: [
    CommonModule,
    DragAndDropModule,
  ],
  exports: [BoardComponent],
  providers: [DependencyContainer]
})
export class BoardModule { }
