import { DragAndDropServiceDragContainerDropEvent } from './drag-and-drop-service-drag-container-drop-event';
import { DragAndDropServiceDragContainerDragOverEvent } from './drag-and-drop-service-drag-container-drag-over-event';
import { DragAndDropServiceDragContainerOutEvent } from './drag-and-drop-service-drag-container-out-event';

export class DragAndDropServiceDropContainerContext {
  public readonly predicate: (data: any) => boolean;
  public readonly data: any;
  public readonly dropEvent: (option: {
    event: DragAndDropServiceDragContainerDropEvent
  }) => void;
  public readonly dragOverEvent: (option: { 
    event: DragAndDropServiceDragContainerDragOverEvent;
  }) => void;
  public readonly outEvent: (option: {
    event: DragAndDropServiceDragContainerOutEvent;
  }) => void;
  
  constructor(option: {
    predicate: (value: any) => boolean,
    data: any,
    dropEvent: (option: {
      event: DragAndDropServiceDragContainerDropEvent
    }) => void,
    dragOverEvent: (option: {
      event: DragAndDropServiceDragContainerDragOverEvent
    }) => void,
    outEvent: (option: {
      event: DragAndDropServiceDragContainerOutEvent
    }) => void
  }) {
    this.predicate = option.predicate;
    this.data = option.data;
    this.dropEvent = option.dropEvent;
    this.dragOverEvent = option.dragOverEvent;
    this.outEvent = option.outEvent;
  }
}
