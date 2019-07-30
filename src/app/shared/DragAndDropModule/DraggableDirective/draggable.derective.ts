import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { MoveEvent } from './Events/MoveEvent';
import { StartEvent } from './Events/StartEvent';
import { DropEvent } from './Events/DropEvent';
import { Position } from './Position';
import { DragAndDropService } from '../DragAndDropService/draganddrop.service';
import { DragObject } from '../DragAndDropService/DragObject';

@Directive({
    selector: '[appDraggable]'
  })
  export class DraggableDirective {
    constructor(
        private dragAndDropService: DragAndDropService
    ) {
    }
  
    private selected: boolean;
  
    private startingPosotion: Position;
  
    @Input()
    data: any;
  
    @Output()
    move: EventEmitter<MoveEvent> = new EventEmitter<MoveEvent>();
  
    @Output()
    start: EventEmitter<StartEvent> = new EventEmitter<StartEvent>();
  
    @Output()
    drop: EventEmitter<DropEvent> = new EventEmitter<DropEvent>();
  
    @HostListener('document:mousemove', ['$event'])
    mousemove(event: MouseEvent) {
      if (this.selected) {
        this.move
          .emit(new MoveEvent({
            offsetX: event.offsetX,
            offsetY: event.offsetY
          }));
      }
    }
  
    @HostListener('document:mouseup', ['$event'])
    mouseup(event: MouseEvent) {
      if (this.selected) {
        this.selected = false;
        this.drop
          .emit(new DropEvent({
            startingPosition: this.startingPosotion,
            acceptedDrop: (this.dragAndDropService
              .dropContainer || {predicate: (data: any) => false})
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
        .emit(new StartEvent());
    }
  }