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
      this.drop
        .emit(new DraggableDropEvent({
          startingPosition: this.startingPosotion,
          acceptedDrop: this.dragAndDropService
            .DropDragObject()
        }));
    }
  }

  @HostListener('mousedown', ['$event'])
  mousedown(event: MouseEvent) {
    this.selected = true;
    this.dragAndDropService
      .StarDragObject({
        dragObjectData: this.data
      });

    this.startingPosotion = new DraggablePosition({
      offsetX: event.offsetX,
      offsetY: event.offsetY
    });
    this.start
      .emit(new DraggableStartEvent());
  }
}
