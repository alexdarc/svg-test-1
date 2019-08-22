import { Component, Input } from '@angular/core';

import { IProcessComponent } from '../../shared/models/process-component.model';
import { SequenceFlow } from './sequence-flow.model';
import { DraggableDragEvent } from '../../../shared/modules/drag-and-drop/draggable-directive/model/draggable-drag-event';
import { DraggableDropEvent } from './../../../shared/modules/drag-and-drop/draggable-directive/model/draggable-drop-event';
import { ICoords } from '../../shared/models/coords.model';
import {DependencyContainer} from "../../../DependencyContainer";

@Component({
  selector: 'svg:svg[app-sequence-flow]',
  templateUrl: './sequence-flow.component.html',
  styleUrls: ['./sequence-flow.component.css'],
})
export class SequenceFlowComponent implements IProcessComponent {
  private sequenceFlow: SequenceFlow;
  private startWaypoint: ICoords;
  private intermediateWaypoints: ICoords[];
  private endWaypoint: ICoords;

  constructor(private dependencyContainer: DependencyContainer){
  }


  @Input()
  set context(sequenceFlow: SequenceFlow) {
    this.sequenceFlow = sequenceFlow;
    const waypoints = sequenceFlow.waypoints;
    const waypointsLenght = sequenceFlow.waypoints.length;

    this.startWaypoint = waypoints[0];
    this.endWaypoint = waypoints[waypointsLenght - 1];
    this.intermediateWaypoints = waypoints.slice(1, waypointsLenght - 1);
  }

  inDragging = false;

  draging(event: DraggableDragEvent, index: number) {
    this.sequenceFlow.waypoints[index].x = event.offsetX;
    this.sequenceFlow.waypoints[index].y = event.offsetY;
  }

  starDragging() {
    this.inDragging = true;
  }

  endDraggingOutgoingPoint(event: DraggableDropEvent): void {
    const accepted = this.dependencyContainer
      .canLinkOutgoingSequenceFlowToFlowObjectQueryHandler
      .Handle({
        flowObjectId: event.containerData.id
        });
    if (!accepted) {
      this.sequenceFlow.waypoints[0].x = event.startingPosition.offsetX;
      this.sequenceFlow.waypoints[0].y = event.startingPosition.offsetY;
    }
    this.inDragging = false;
  }

  endDragging(event: DraggableDropEvent, index: number) {
    this.inDragging = false;
    if (!event.acceptableDrop) {
      this.sequenceFlow.waypoints[index].x = event.startingPosition.offsetX;
      this.sequenceFlow.waypoints[index].y = event.startingPosition.offsetY;
    }
  }

  dummy() {
    this.inDragging = false;
  }
}
