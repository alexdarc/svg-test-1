export class DragObject<T> {
    data: T;
  
    constructor(option: {
      data: T
    }) {
      this.data = option.data;
    }
  }
  