export class DragAndDropServiceDragObjectMoveEvent
{
  public readonly offsetY: number;
  public readonly offsetX: number;
  
  constructor(option: {
    offsetX: number,
    offsetY: number
  }) {
    this.offsetX = option.offsetX;
    this.offsetY = option.offsetY;
  }
}