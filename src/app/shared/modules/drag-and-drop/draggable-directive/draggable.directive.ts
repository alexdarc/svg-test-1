import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

import { DragAndDropService } from '../drag-and-drop-service/drag-and-drop.service';
import { DraggablePosition } from './model/draggable-position';
import { DraggableMoveEvent } from './model/draggable-move-event';
import { DraggableStartEvent } from './model/draggable-start-event';
import { DraggableDropEvent } from './model/draggable-drop-event';
import {DragAndDropServiceDragObjectContext} from "../drag-and-drop-service/model/drag-and-drop-service-drag-object-context";
import {DragAndDropServiceDragObjectDropEvent} from "../drag-and-drop-service/model/drag-and-drop-service-drag-object-drop-event";
import { DragAndDropServiceDragObjectMoveEvent } from '../drag-and-drop-service/model/drag-and-drop-service-drag-object-move-event';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  constructor(
    private dragAndDropService: DragAndDropService
  ) { }

  private startingPosotion: DraggablePosition;

  // tslint:disable-next-line: no-input-rename
  @Input('draggableData')
  data: any;

  // tslint:disable-next-line: no-output-rename
  @Output('draggableMove')
  move: EventEmitter<DraggableMoveEvent> = new EventEmitter<DraggableMoveEvent>();

  // tslint:disable-next-line: no-output-rename
  @Output('draggableStart')
  start: EventEmitter<DraggableStartEvent> = new EventEmitter<DraggableStartEvent>();

  // tslint:disable-next-line: no-output-rename
  @Output('draggableDrop')
  drop: EventEmitter<DraggableDropEvent> = new EventEmitter<DraggableDropEvent>();

  @HostListener('mousedown', ['$event'])
  mousedown(mouseEvent: MouseEvent) {
    this.dragAndDropService
      .StarDraggingObject({
        dragObjectContext: new DragAndDropServiceDragObjectContext({
          data: this.data,
          dropEvent: (option: {
            event: DragAndDropServiceDragObjectDropEvent
          }) => {
            this.drop
              .emit(new DraggableDropEvent({
                startingPosition: this.startingPosotion,
                acceptedDrop: option.event.accepted,
                data: option.event.dropContainerData
              }));
          },
          moveEvent: (option: {
            event: DragAndDropServiceDragObjectMoveEvent
          }) => {
            this.move
              .emit(new DraggableMoveEvent({
                offsetX: option.event.offsetX,
                offsetY: option.event.offsetY
              }));
          }
        })
      });

    this.startingPosotion = new DraggablePosition({
      offsetX: mouseEvent.offsetX,
      offsetY: mouseEvent.offsetY
    });
    this.start
      .emit(new DraggableStartEvent());
  }
}
