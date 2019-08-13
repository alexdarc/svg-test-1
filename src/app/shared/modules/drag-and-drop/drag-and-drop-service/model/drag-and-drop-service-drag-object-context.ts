import {DragAndDropServiceDragObjectDropEvent} from "./drag-and-drop-service-drag-object-drop-event";
import { DragAndDropServiceDragObjectMoveEvent } from './drag-and-drop-service-drag-object-move-event';

export class DragAndDropServiceDragObjectContext {
  public readonly data: any;
  public readonly dropEvent: (option: {
    event: DragAndDropServiceDragObjectDropEvent
  }) => void;
  public readonly moveEvent: (option: {
    event: DragAndDropServiceDragObjectMoveEvent
  }) => void;

  constructor(option: {
    dropEvent: (option: {
      event: DragAndDropServiceDragObjectDropEvent
    }) => void,
    moveEvent: (option: {
      event: DragAndDropServiceDragObjectMoveEvent
    }) => void,
    data: any
  }) {
    this.data = option.data;
    this.dropEvent = option.dropEvent;
    this.moveEvent = option.moveEvent;
  }
}
