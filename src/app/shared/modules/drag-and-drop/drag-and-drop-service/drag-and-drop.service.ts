import { Injectable } from '@angular/core';
import { DragAndDropServiceDragObjectContex } from './model/drag-and-drop-service-drag-object-contex';
import { DragAndDropServiceDropContainerContext } from './model/drag-and-drop-service-drop-container-contex';

@Injectable()
export class DragAndDropService {
  private dropContainer: DragAndDropServiceDropContainerContext;
  private dragObject: DragAndDropServiceDragObjectContex;

  public OverDropContainer(option: {
    dropContainer: DragAndDropServiceDropContainerContext
  }): boolean {
    this.dropContainer = option.dropContainer;

    if (this.dragObject != null) {
      return this.dropContainer.predicate(
        this.dragObject.data
      );
    }

    return false;
  }

  public DropContainerDrop(): boolean {
    let acceptedDrop = false;
    if (this.dragObject) {
      acceptedDrop = this.dropContainer
        .predicate(this.dragObject.data);
    }

    this.dropContainer = null;
    return acceptedDrop;
  }

  public OutDropContainer(): void {
    this.dropContainer = null;
  }

  public StarDraggingObject(option: {
    dragObjectData: any
  }): void {
    this.dragObject = new DragAndDropServiceDragObjectContex({
      data: option.dragObjectData
    });
  }

  public DropDragObject(): boolean {
    let acceptedDrop = false;
    if (this.dropContainer) {
      acceptedDrop = this.dropContainer
        .predicate(this.dragObject.data);
    }
    this.dragObject = null;
    return acceptedDrop;
  }
}

