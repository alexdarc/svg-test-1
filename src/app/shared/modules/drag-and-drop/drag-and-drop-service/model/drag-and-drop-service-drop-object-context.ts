import { DragAndDropServiceDraggingDropEvent as DropEvent } from './drag-and-drop-service-dragging-drop-event';
import { DragAndDropServiceDraggingDragEvent as DragEvent } from './drag-and-drop-service-dragging-dragging-event';
import { DragAndDropPosition as Position } from '../../drag-and-drop-positon';

export class DragAndDropServiceDropObjectContext {
  public readonly dragObjectData: any;
  public readonly startingPosition: Position;
  public readonly dropCallback: (event: DropEvent) => void;
  public readonly dragCallback: (event: DragEvent) => void;
  
  constructor(option: {
    dragObjectData: any,
    startingPosition: Position,
    dropCallback: (event: DropEvent) => void,
    dragCallback: (event: DragEvent) => void
  }) {
    this.dragObjectData = option.dragObjectData;
    this.startingPosition = option.startingPosition;
    this.dropCallback = option.dropCallback;
    this.dragCallback = option.dragCallback;
  }
}