import { Injectable, Predicate } from '@angular/core';

export class DropContainer<T, T1> {
  predicate: (data: T) => boolean;
  data: T1;

  constructor(option: {
    predicate: Predicate<T>,
    data: T1
  }) {
    this.predicate = option.predicate;
    this.data = option.data;
  }
}

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {
  public dropContainer: DropContainer<any, any>;

}


