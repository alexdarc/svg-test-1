export class DropContainer<T, T1> {
    predicate: (data: T) => boolean;
    data: T1;
  
    constructor(option: {
      predicate: (value: any) => boolean
      data: T1
    }) {
      this.predicate = option.predicate;
      this.data = option.data;
    }
  }
  