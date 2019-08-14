export class DraggableDragEvent {
  public readonly offsetX: number;
  public readonly offsetY: number;
  
  constructor(option: {
    offsetX: number,
    offsetY: number
  }) {
    this.offsetX = option.offsetX;
    this.offsetY = option.offsetY;
  }
}