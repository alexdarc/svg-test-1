import {DragAndDropServiceDragObjectDropEvent} from "./drag-and-drop-service-drag-object-drop-event";

export class DragAndDropServiceDragObjectContext {
  public readonly data: any;
  public readonly dropEvent: (option: {
    event: DragAndDropServiceDragObjectDropEvent
  }) => void;

  constructor(option: {
    dropEvent: (option: {
      event: DragAndDropServiceDragObjectDropEvent
    }) => void,
    data: any
  }) {
    this.data = option.data;
    this.dropEvent = option.dropEvent;
  }
}
