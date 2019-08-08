import { Injectable } from '@angular/core';
import { DragAndDropServiceDropContainer } from './model/drag-and-drop-service-drop-container';
import { DragAndRopServiceDragObject } from './model/drag-and-drop-service-drag-object';

@Injectable()
export class DragAndDropService {
  private dropContainer: DragAndDropServiceDropContainer<any, any>;
  private dragObject: DragAndRopServiceDragObject<any>;

  public DropContainerOver(option: {
    containerPredicate: (value: any) => boolean,
    containerData: any
  }): void {
    this.dropContainer = new DragAndDropServiceDropContainer<any, any>({
      predicate: option.containerPredicate,
      data: option.containerData
    });
  }

  public DropContainerDrop(): boolean {
    if (this.dragObject) {
      return this.dropContainer
        .predicate(this.dragObject.data);
    }

    return false;
  }

  public DropContainerEmpty(): void {
    this.dropContainer = null;
  }

  public StarDragObject(option: {
    dragObjectData: any
  }): void {
    this.dragObject = new DragAndRopServiceDragObject<any>({
      data: option.dragObjectData
    });
  }

  public DropDragObject(): boolean {
    if (this.dropContainer) {
      return this.dropContainer
        .predicate(this.dragObject.data);
    }

    return false;
  }

  public EmptyDragObject(): void {
    this.dragObject = null;
  }

}

