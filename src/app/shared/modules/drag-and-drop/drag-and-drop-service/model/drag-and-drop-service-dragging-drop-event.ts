import { DragAndDropPosition } from '../../drag-and-drop-positon';

export class DragAndDropServiceDraggingDropEvent {
  public readonly acceptableDrop: boolean;
  public readonly containerData: any
  public readonly position: DragAndDropPosition;
  public readonly startingPosition: DragAndDropPosition;
  
  constructor(option: {
    position: DragAndDropPosition,
    startingPosition: DragAndDropPosition,
    acceptableDrop: boolean,
    containerData: any
  }) {
    this.position = option.position;
    this.startingPosition = option.startingPosition;
    this.acceptableDrop = option.acceptableDrop;
    this.containerData = option.containerData;
  }
}