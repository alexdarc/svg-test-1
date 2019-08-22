import {
  Directive,
  Output,
  EventEmitter,
  Input,
  HostListener,
} from '@angular/core';

import { DropContainerOverEvent as OverEvent } from './model/drop-container-over-event';
import { DropContainerDropEvent as DropEvent } from './model/drop-container-drop-event';
import { DropContainerOutEvent as OutEvent } from './model/drop-container-out-event';

import { DragAndDropService } from '../drag-and-drop-service/drag-and-drop.service';

import { DragAndDropServiceDropContainerDropEvent as DragAndDropServiceDropEvent } from '../drag-and-drop-service/model/drag-and-drop-service-drop-container-drop-event';
import { DragAndDropServiceDropContainerDragOverEvent as DragAndDropServiceDragOverEvent} from '../drag-and-drop-service/model/drag-and-drop-service-drop-container-drag-object-over-container-event';
import { DragAndDropServiceDragAndDropContainerContext as DragAndDropContainerContext} from '../drag-and-drop-service/model/drag-and-drop-service-drop-conatiner-context';

@Directive({
  selector: '[appDropContainer]'
})
export class DropContainerDirective {
  constructor(
    private dragAndDropService: DragAndDropService
  ) {}

  @Output('dropContainerOver')
  over: EventEmitter<OverEvent> = new EventEmitter<OverEvent>();

  @Output('dropContainerOut')
  out: EventEmitter<OutEvent> = new EventEmitter<OutEvent>();

  @Output('dropContainerDrop')
  drop: EventEmitter<DropEvent> = new EventEmitter<DropEvent>();

  @Input('dropContainerData')
  data: any;

  @Input('dropContainerPredicate')
  predicate: (data: any) => boolean = () => false;

  @HostListener('mouseover')
  mouseover() {
    this.dragAndDropService
      .overDropContainer(new DragAndDropContainerContext({
        data: this.data,
        predicate: this.predicate,
        dropCallback: (event: DragAndDropServiceDropEvent) => {
          this.dropHandler(event)
        },
        dragOverCallback: (event: DragAndDropServiceDragOverEvent) => { 
          this.dragOverHandler(event)
        },
      }));
  }

  @HostListener('mouseout')
  mouseout() {
    this.dragAndDropService.outDropContainer();
    this.out.emit(new OutEvent());
  }

  private dragOverHandler(
    event: DragAndDropServiceDragOverEvent) {
      this.over.emit(new OverEvent({
        acceptableDrop: event.acceptableDrop,
        dragObjectData: event.dragObjectData
      }))
  }

  private dropHandler(event: DragAndDropServiceDropEvent) {
    this.drop.emit(new DropEvent({
      acceptableDrop: event.acceptableDrop,
      dragObjectData: event.dragObjectData
    }))
  }
}
