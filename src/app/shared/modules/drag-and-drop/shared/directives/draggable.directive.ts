import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

import { DragAndDropService } from '../services/drag-and-drop.service';
import { DragObject } from '../models/DragObject';
import { Position } from '../models/Position';
import { DraggableMoveEvent } from '../models/DraggableMoveEvent';
import { DraggableStartEvent } from '../models/DraggableStartEvent';
import { DraggableDropEvent } from '../models/DraggableDropEvent';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {

  constructor(
    private dragAndDropService: DragAndDropService
  ) { }

  private selected: boolean;
  private startingPosotion: Position;

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
          acceptedDrop: (this.dragAndDropService
            .dropContainer || {predicate: () => false})
            .predicate(this.data)
        }));
      this.dragAndDropService
        .dragObject = null;
    }
  }

  @HostListener('mousedown', ['$event'])
  mousedown(event: MouseEvent) {
    this.selected = true;
    this.dragAndDropService
      .dragObject = new DragObject({
        data: this.data
      });

    this.startingPosotion = new Position({
      offsetX: event.offsetX,
      offsetY: event.offsetY
    });
    this.start
      .emit(new DraggableStartEvent());
  }
}
