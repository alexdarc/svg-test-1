import { Component, Input } from '@angular/core';

import { IProcessComponent } from '../../shared/models/process-component.model';
import { SequenceFlow } from './sequence-flow.model';
import { DraggableMoveEvent } from './../../../shared/modules/drag-and-drop/shared/models/DraggableMoveEvent';
import { DraggableDropEvent } from './../../../shared/modules/drag-and-drop/shared/models/DraggableDropEvent';

@Component({
  selector: 'svg:svg[app-sequence-flow]',
  templateUrl: './sequence-flow.component.html',
  styleUrls: ['./sequence-flow.component.css'],
})
export class SequenceFlowComponent implements IProcessComponent {
  @Input()
  context: SequenceFlow;

  inDragging = false;

  draging(event: DraggableMoveEvent, index: number) {
    this.context.waypoints[index].x = event.offsetX;
    this.context.waypoints[index].y = event.offsetY;
  }

  starDragging() {
    this.inDragging = true;
  }

  endDragging(event: DraggableDropEvent, index: number) {
    this.inDragging = false;
    if (!event.acceptedDrop) {
      this.context.waypoints[index].x = event.startingPosition.offsetX;
      this.context.waypoints[index].y = event.startingPosition.offsetY;
    }
  }
}
