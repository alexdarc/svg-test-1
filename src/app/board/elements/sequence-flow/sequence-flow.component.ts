import { Component, Input } from '@angular/core';

import { IProcessComponent } from '../../shared/models/process-component.model';
import { SequenceFlow } from './sequence-flow.model';
import { MoveEvent, DropEvent } from 'src/app/shared/directives/draggable.directive';

@Component({
  selector: 'svg:svg[app-sequence-flow]',
  templateUrl:'./sequence-flow.component.html',
  styleUrls: ['./sequence-flow.component.css'],
})
export class SequenceFlowComponent implements IProcessComponent {
  @Input()
  context: SequenceFlow;

  private inDragging = false;

  draging(event: MoveEvent, index: number) {
    this.context.waypoints[index].x = event.offsetX;
    this.context.waypoints[index].y = event.offsetY;
  }

  starDragging() {
    this.inDragging = true;
  }

  endDragging(event: DropEvent, index: number) {
    this.inDragging = false;
    if (!event.acceptedDrop) {
      this.context.waypoints[index].x = event.startingPosition.offsetX;
      this.context.waypoints[index].y = event.startingPosition.offsetY;
    }
  }
}
