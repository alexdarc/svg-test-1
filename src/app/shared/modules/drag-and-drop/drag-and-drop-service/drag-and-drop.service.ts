import { Injectable } from '@angular/core';
import { DragAndDropServiceDragObjectContext } from './model/drag-and-drop-service-drag-object-context';
import { DragAndDropServiceDropContainerContext } from './model/drag-and-drop-service-drop-container-context';
import {DragAndDropServiceDragObjectDropEvent} from "./model/drag-and-drop-service-drag-object-drop-event";

@Injectable()
export class DragAndDropService {
  private dropContainerContext: DragAndDropServiceDropContainerContext;
  private dragObjectContext: DragAndDropServiceDragObjectContext;

  public OverDropContainer(option: {
    dropContainer: DragAndDropServiceDropContainerContext
  }): boolean {
    this.dropContainerContext = option.dropContainer;

    if (this.dragObjectContext != null) {
      return this.dropContainerContext.predicate(
        this.dragObjectContext.data
      );
    }

    return false;
  }

  public DropContainerDrop(): boolean {
    let acceptedDrop = false;
    if (this.dragObjectContext) {
      acceptedDrop = this.dropContainerContext
        .predicate(this.dragObjectContext.data);
    }

    this.dropContainerContext = null;
    return acceptedDrop;
  }

  public OutDropContainer(): void {
    this.dropContainerContext = null;
  }

  public StarDraggingObject(option: {
    dragObjectContext: DragAndDropServiceDragObjectContext
  }): void {
    this.dragObjectContext = option.dragObjectContext;
  }

  public DropDragObject(): void {
    let acceptedDrop = false;
    if (this.dropContainerContext) {
      acceptedDrop = this.dropContainerContext
        .predicate(this.dragObjectContext.data);
    }
    this.dragObjectContext.dropEvent({event:new DragAndDropServiceDragObjectDropEvent({
        containerContext: this.dropContainerContext,
        accepted: acceptedDrop
      })});
    this.dragObjectContext = null;
  }
}

