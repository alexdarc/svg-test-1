import {
  Directive,
  Output,
  EventEmitter,
  Input,
  HostListener,
} from '@angular/core';
import { DragAndDropService } from '../drag-and-drop-service/drag-and-drop.service';
import { DropContainerOutEvent } from './model/drop-container-out-event';
import { DropContainerEnterEvent } from './model/drop-container-enter-event';
import { DropContainerDropEvent } from './model/drop-container-drop-event';

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
    this.dragAndDropService
      .DropContainerOver({
        containerPredicate: this.predicate,
        containerData: this.data
      });
  }

  @HostListener('mouseout')
  mouseout() {
    this.dragAndDropService
      .DropContainerDrop();
  }

  @HostListener('mouseup')
  mouseup() {
    this.drop.emit(
      new DropContainerDropEvent({
        acceptedDrop: this.predicate(
          this.dragAndDropService
            .DropContainerDrop()
        )
      })
    );
  }
}
