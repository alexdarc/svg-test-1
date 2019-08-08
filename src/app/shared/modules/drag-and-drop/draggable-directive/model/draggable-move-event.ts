export class DraggableMoveEvent {
  public offsetY: number;
  public offsetX: number;
  public data: any;

  constructor(option: {
    offsetX: number,
    offsetY: number,
    data: any,
  }) {
    this.offsetX = option.offsetX;
    this.offsetY = option.offsetY;
    this.data = option.data;
  }
}
