import {
  Directive,
  ElementRef,
  Renderer2,
  Output,
  EventEmitter,
  HostListener,
  Predicate,
  Input,
} from '@angular/core';

import { DragAndDropService, DropContainer } from './draganddrop.service';

export class EnterEvent {
}

export class OutEvent {
}

@Directive({
  selector: '[appDropContainer]'
})
export class DropContainerDirective {
  constructor(
      private elementRef: ElementRef,
      private renderer: Renderer2,
      private dragAndDropService: DragAndDropService
  ) {
  }
  @Output()
  enter: EventEmitter<EnterEvent> = new EventEmitter<EnterEvent>();

  @Output()
  out: EventEmitter<EnterEvent> = new EventEmitter<EnterEvent>();

  @Input()
  data: any;

  @Input()
  predicate: (data: any) => boolean = () => false

  @HostListener('mouseover', ['$event'])
  mouseover() {
    this.dragAndDropService
      .dropContainer = new DropContainer<any, any>({
        predicate: this.predicate,
        data: this.data
      });
  }

  @HostListener('mouseout', ['$event'])
  mouseout() {
    this.dragAndDropService.dropContainer = null;
  }
}
