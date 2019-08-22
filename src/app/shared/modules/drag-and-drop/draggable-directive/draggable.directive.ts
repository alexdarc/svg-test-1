import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

import { DraggableStartEvent as StartEvent} from '../../drag-and-drop/draggable-directive/model/draggable-start-event';
import { DraggableDragEvent as DragEvent } from './model/draggable-drag-event';
import { DraggableDropEvent as DropEvent } from './model/draggable-drop-event';

import { DragAndDropService } from '../drag-and-drop-service/drag-and-drop.service';
import { DragAndDropServiceDraggingDropEvent as DragAndDropServiceDropEvent } from '../drag-and-drop-service/model/drag-and-drop-service-dragging-drop-event';
import { DragAndDropServiceDraggingDragEvent as DragAndDropServiceDragEvent } from '../drag-and-drop-service/model/drag-and-drop-service-dragging-drag-event';
import { DragAndDropServiceDropObjectContext as DropObjectContext } from '../drag-and-drop-service/model/drag-and-drop-service-drop-object-context';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  constructor(
    private dragAndDropService: DragAndDropService
  ) { }

  @Input('draggableData')
  data: any;

  @Output('draggableDrag')
  drag: EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output('draggableStart')
  start: EventEmitter<StartEvent> = new EventEmitter<StartEvent>();

  @Output('draggableDrop')
  drop: EventEmitter<DropEvent> = new EventEmitter<DropEvent>();

  @HostListener('mousedown', ['$event'])
  mousedown(mouseEvent: MouseEvent) {
    this.dragAndDropService
      .startDragging(new DropObjectContext({
        dragObjectData: this.data,
        startingPosition: {
          offsetX: mouseEvent.offsetX,
          offsetY: mouseEvent.offsetY
        },
        dropCallback: (event: DragAndDropServiceDropEvent) => {
          this.dropHandler(event);
        },
        dragCallback: (event: DragAndDropServiceDragEvent) => {
          this.dragHandler(event)
        }
      }));

    this.start.emit(new StartEvent());
  }

  private dropHandler(event: DragAndDropServiceDropEvent): void {
    this.drop.emit(new DropEvent({
      acceptableDrop: event.acceptableDrop,
      containerData: event.containerData,
      position: event.position,
      startingPosition: event.startingPosition
    }));
  }

  private dragHandler(event: DragAndDropServiceDragEvent): void {
    this.drag.emit(new DragEvent({
      offsetX: event.offsetX,
      offsetY: event.offsetY
    }));
  }
}
