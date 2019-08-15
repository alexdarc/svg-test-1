export class DragAndDropServiceDraggingDragEvent {
  public readonly acceptableDrop: boolean;
  public readonly containerData: any
  public readonly offsetX: number;
  public readonly offsetY: number;
  
  constructor(option: {
    offsetX: number,
    offsetY: number,
    acceptableDrop: boolean,
    containerData: any
  }) {
    this.offsetX = option.offsetX;
    this.offsetY = option.offsetY;
    this.acceptableDrop = option.acceptableDrop;
    this.containerData = option.containerData;
  }
}