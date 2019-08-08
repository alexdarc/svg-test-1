import { Component, Input } from '@angular/core';

import { IProcessComponent } from '../../shared/models/process-component.model';
import { SequenceFlow } from './sequence-flow.model';
import { DraggableMoveEvent } from './../../../shared/modules/drag-and-drop/draggable-directive/model/draggable-move-event';
import { DraggableDropEvent } from './../../../shared/modules/drag-and-drop/draggable-directive/model/draggable-drop-event';
import { IntersectionTool } from '../../../IntersectionTool/IntersectionTool';

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

    if (event.data) {
      const intersections = IntersectionTool.getIntersection(
        IntersectionTool.getPath(this.context),
        IntersectionTool.getPath(event.data),
      );

      if (intersections.length > 0) {
        this.context.waypoints[index].x = intersections[0].x;
        this.context.waypoints[index].y = intersections[0].y;
      }
    }
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

    // const path0 = 'M150,150L150,200';
    // const path1 = 'M150,150m0,-18a18,18,0,1,1,0,36a18,18,0,1,1,0,-36z';
    // console.log(IntersectionTool.getIntersection(path0, path1));
  }
}
