import { DragAndDropServiceDragObjectContex } from './drag-and-drop-service-drag-object-contex';
import { DragAndDropServiceDragContainerDropEvent } from './drag-and-drop-service-drag-container-drop-event';

export class DragAndDropServiceDropContainerContext {
  public readonly predicate: (data: any) => boolean;
  public readonly dropEvent: (option: {
    event: DragAndDropServiceDragContainerDropEvent
  }) => void;
  public readonly data: any;

  constructor(option: {
    predicate: (value: any) => boolean,
    dropEvent: (option: {
      event: DragAndDropServiceDragContainerDropEvent
    }) => void,
    data: any
  }) {
    this.predicate = option.predicate;
    this.data = option.data;
    this.dropEvent = option.dropEvent;
  }
}
