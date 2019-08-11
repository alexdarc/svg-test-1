import {
  Directive,
  Output,
  EventEmitter,
  Input,
  HostListener,
} from '@angular/core';
import { DragAndDropService } from '../drag-and-drop-service/drag-and-drop.service';
import { DropContainerOutEvent } from './model/drop-container-out-event';
import { DropContainerOverEvent } from './model/drop-container-over-event';
import { DropContainerDropEvent } from './model/drop-container-drop-event';
import { DragAndDropServiceDragObjectContext } from '../drag-and-drop-service/model/drag-and-drop-service-drag-object-context';
import { DragAndDropServiceDropContainerContext } from '../drag-and-drop-service/model/drag-and-drop-service-drop-container-context';
import { DragAndDropServiceDragContainerDropEvent } from '../drag-and-drop-service/model/drag-and-drop-service-drag-container-drop-event';

@Directive({
  selector: '[appDropContainer]'
})
export class DropContainerDirective {
  constructor(
    private dragAndDropService: DragAndDropService
  ) {}

  // tslint:disable-next-line: no-output-rename
  @Output('dropContainerOver')
  over: EventEmitter<DropContainerOverEvent> = new EventEmitter<DropContainerOverEvent>();

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
  predicate: (data: any) => boolean = () => false;

  @HostListener('mouseover')
  mouseover() {
    const accepted = this.dragAndDropService
      .OverDropContainer({
        dropContainer: new DragAndDropServiceDropContainerContext({
          predicate: this.predicate,
          dropEvent: (option: {
            event: DragAndDropServiceDragContainerDropEvent
          }) => {
            this.dropEvent({
              dragObject: option.event.dragObjectContext,
              accepted: option.event.accepted
            });
          },
          data: this.data
        })});

    this.over
      .emit(new DropContainerOverEvent({
        accepted
      }));

  }

  @HostListener('mouseout')
  mouseout() {
    this.dragAndDropService
      .OutDropContainer();

    this.out
      .emit(
        new DropContainerOutEvent());
  }

  dropEvent(option: {
    dragObject: DragAndDropServiceDragObjectContext,
    accepted: boolean
  }) {
    this.drop
      .emit(new DropContainerDropEvent({
        acceptedDrop: option.accepted,
        dragObjectData: option.dragObject.data
      }));
  }
}
