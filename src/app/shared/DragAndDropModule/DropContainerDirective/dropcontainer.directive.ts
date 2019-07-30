import {
  Directive,
  Output,
  EventEmitter,
  HostListener,
  Input,
} from '@angular/core';

import { DragAndDropService } from '../DragAndDropService/draganddrop.service';
import { DropContainer } from '../DragAndDropService/DropContainer';
import { EnterEvent } from './Events/EnterEvent';
import { OutEvent } from './Events/OutEvent';
import { DropEvent } from './Events/DropEvent';

@Directive({
  selector: '[appDropContainer]'
})
export class DropContainerDirective {
  constructor(
      private dragAndDropService: DragAndDropService
  ) {
  }

  @Output()
  enter: EventEmitter<EnterEvent> = new EventEmitter<EnterEvent>();

  @Output()
  out: EventEmitter<OutEvent> = new EventEmitter<OutEvent>();

  @Output()
  drop: EventEmitter<DropEvent> = new EventEmitter<DropEvent>();

  @Input()
  data: any;

  @Input()
  predicate: (data: any) => boolean = () => false

  @HostListener('mouseover')
  mouseover() {
    this.dragAndDropService.dropContainer = new DropContainer<any, any>({
        predicate: this.predicate,
        data: this.data
      });
  }

  @HostListener('mouseout')
  mouseout() {
    this.dragAndDropService
      .dropContainer = null;
  }

  @HostListener('mouseup')
  mouseup() {
    this.drop.emit(new DropEvent({
      acceptedDrop: this.predicate(
          this.dragAndDropService
            .dragObject
            .data)      
    }));
  }
}
