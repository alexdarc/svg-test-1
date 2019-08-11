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
import {DropContainerDropEvent} from "../drop-container-directive/model/drop-container-drop-event";
import {DragAndDropServiceDropContainerContext} from "../drag-and-drop-service/model/drag-and-drop-service-drop-container-context";

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  constructor(
    private dragAndDropService: DragAndDropService
  ) { }

  private selected: boolean;
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

  @HostListener('document:mousemove', ['$event'])
  mousemove(event: MouseEvent) {
    if (this.selected) {
      this.move
        .emit(new DraggableMoveEvent({
          offsetX: event.offsetX,
          offsetY: event.offsetY
        }));
    }
  }

  @HostListener('document:mouseup', ['$event'])
  mouseup() {
    if (this.selected) {
      this.selected = false;
      this.dragAndDropService
        .DropDragObject();
    }
  }

  dropEvent(option: {
    containerContext: DragAndDropServiceDropContainerContext,
    accepted: boolean
  }) {
    this.drop
      .emit(new DraggableDropEvent({
        startingPosition: this.startingPosotion,
        acceptedDrop: option.accepted,
        data: option.containerContext.data
      }));
  }

  @HostListener('mousedown', ['$event'])
  mousedown(event: MouseEvent) {
    this.selected = true;
    this.dragAndDropService
      .StarDraggingObject({
        dragObjectContext: new DragAndDropServiceDragObjectContext({
          dropEvent: (option: {
            event: DragAndDropServiceDragObjectDropEvent
          }) => {
              this.dropEvent({
              containerContext: option.event.containerContext,
              accepted: option.event.accepted
            })},
          data: this.data
        })
      });

    this.startingPosotion = new DraggablePosition({
      offsetX: event.offsetX,
      offsetY: event.offsetY
    });
    this.start
      .emit(new DraggableStartEvent());
  }
}
