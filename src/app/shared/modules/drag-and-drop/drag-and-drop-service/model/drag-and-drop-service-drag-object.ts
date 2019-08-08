export class DragAndRopServiceDragObject<T> {
  data: T;

  constructor(option: {
    data: T
  }) {
    this.data = option.data;
  }
}
