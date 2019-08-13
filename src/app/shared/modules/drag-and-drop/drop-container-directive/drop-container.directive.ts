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

import { DragAndDropServiceDropContainerContext } from '../drag-and-drop-service/model/drag-and-drop-service-drop-container-context';
import { DragAndDropServiceDragContainerDropEvent } from '../drag-and-drop-service/model/drag-and-drop-service-drag-container-drop-event';
import { DragAndDropServiceDragContainerDragOverEvent } from '../drag-and-drop-service/model/drag-and-drop-service-drag-container-drag-over-event';
import { DragAndDropServiceDragContainerOutEvent } from '../drag-and-drop-service/model/drag-and-drop-service-drag-container-out-event';

@Directive({
  selector: '[appDropContainer]'
})
export class DropContainerDirective {
  constructor(
    private dragAndDropService: DragAndDropService
  ) {}

  @Output('dropContainerOver')
  over: EventEmitter<DropContainerOverEvent> = new EventEmitter<DropContainerOverEvent>();

  @Output('dropContainerOut')
  out: EventEmitter<DropContainerOutEvent> = new EventEmitter<DropContainerOutEvent>();

  @Output('dropContainerDrop')
  drop: EventEmitter<DropContainerDropEvent> = new EventEmitter<DropContainerDropEvent>();

  @Input('dropContainerData')
  data: any;

  @Input('dropContainerPredicate')
  predicate: (data: any) => boolean = () => false;

  @HostListener('mouseover')
  mouseover() {
    this.dragAndDropService
      .OverDropContainer({
        dropContainerContext: new DragAndDropServiceDropContainerContext({
          predicate: this.predicate,
          data: this.data,
          dropEvent: (option: {
            event: DragAndDropServiceDragContainerDropEvent
          }) => {
            this.drop
              .emit(new DropContainerDropEvent({
                acceptedDrop: option.event.accepted,
                dragObjectData: option.event.dragObjectData
              }));
          },
          dragOverEvent: (option: {
            event: DragAndDropServiceDragContainerDragOverEvent
          }) => {
            this.over
              .emit(new DropContainerOverEvent({
                accepted: option.event.accepted,
                dragObjectData: option.event.dragObjectData
              }));
          },
          outEvent: (option: {
            event: DragAndDropServiceDragContainerOutEvent
          }) => {
            this.out
              .emit(
                new DropContainerOutEvent());
          }
        })});
  }

  @HostListener('mouseout')
  mouseout() {
    this.dragAndDropService
      .OutDropContainer();
  }
}
