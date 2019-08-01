import {
  Directive,
  Output,
  EventEmitter,
  Input,
  HostListener,
} from '@angular/core';
import { DragAndDropService } from '../services/drag-and-drop.service';
import { DropContainer } from '../models/DropContainer';
import { DropContainerOutEvent } from './../models/DropContainerOutEvent';
import { DropContainerEnterEvent } from './../models/DropContainerEnterEvent';
import { DropContainerDropEvent } from './../models/DropContainerDropEvent';

@Directive({
  selector: '[appDropContainer]'
})
export class DropContainerDirective {
  constructor(
    private dragAndDropService: DragAndDropService
  ) {}

  // tslint:disable-next-line: no-output-rename
  @Output('dropContainerEnter')
  enter: EventEmitter<DropContainerEnterEvent> = new EventEmitter<DropContainerEnterEvent>();

  // tslint:disable-next-line: no-output-rename
  @Output('dropContainerOut')
  out: EventEmitter<DropContainerOutEvent> = new EventEmitter<DropContainerOutEvent>();

  // tslint:disable-next-line: no-output-rename
  @Output('dropContainerDrop')
  drop: EventEmitter<DropContainerDropEvent> = new EventEmitter<DropContainerDropEvent>();

  // tslint:disable-next-line: no-input-rename
  @Input('dropContainerData')
  data: any;

  // tslint:disable-next-line: no-input-rename
  @Input('dropContainerPredicate')
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
    this.drop.emit(
      new DropContainerDropEvent({
        acceptedDrop: this.predicate(
          this.dragAndDropService
            .dragObject
            .data
        )
      })
    );
  }
}
