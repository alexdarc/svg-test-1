export class DraggableMoveEvent {
  public offsetY: number;
  public offsetX: number;

  constructor(option: {
    offsetX: number,
    offsetY: number,
  }) {
    this.offsetX = option.offsetX;
    this.offsetY = option.offsetY;
  }
}
