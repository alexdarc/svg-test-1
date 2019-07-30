import {
    Directive,
    ElementRef,
    Renderer2,
    Output,
    EventEmitter,
    HostListener,
    Input,
  } from '@angular/core';

import { DragAndDropService } from './draganddrop.service';

export class MoveEvent {
  public offsetY: number;
  public offsetX: number;

  constructor(option: {
    offsetX: number,
    offsetY: number,
  }) {
    this.offsetX = option.offsetX;
    this.offsetY = option.offsetY;
  }
}

class Position {
  offsetX: number;
  offsetY: number;

  constructor(option: {
    offsetX: number,
    offsetY: number
  }) {
    this.offsetX = option.offsetX;
    this.offsetY = option.offsetY;
  }
}

export class StartEvent {
}

export class DropEvent {

  startingPosition: Position;
  acceptedDrop: boolean;

  constructor(option: {
    startingPosition: Position,
    acceptedDrop: boolean
  }) {
    this.startingPosition = option.startingPosition;
    this.acceptedDrop = option.acceptedDrop;
  }
}

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  constructor(
      private elementRef: ElementRef,
      private renderer: Renderer2,
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
    }
  }

  @HostListener('mousedown', ['$event'])
  mousedown(event: MouseEvent) {
    this.selected = true;
    this.startingPosotion = new Position({
      offsetX: event.offsetX,
      offsetY: event.offsetY
    });
    this.start
      .emit(new StartEvent());
  }
}
