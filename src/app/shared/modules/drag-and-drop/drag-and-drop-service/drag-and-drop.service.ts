import { Injectable, HostListener } from '@angular/core';
import { DragAndDropServiceDragObjectContext } from './model/drag-and-drop-service-drag-object-context';
import { DragAndDropServiceDropContainerContext } from './model/drag-and-drop-service-drop-container-context';
import {DragAndDropServiceDragObjectDropEvent} from "./model/drag-and-drop-service-drag-object-drop-event";
import { DragAndDropServiceDragContainerDropEvent } from './model/drag-and-drop-service-drag-container-drop-event';
import { DragAndDropServiceDragContainerDragOverEvent } from './model/drag-and-drop-service-drag-container-drag-over-event';
import { DragAndDropServiceDragObjectMoveEvent } from './model/drag-and-drop-service-drag-object-move-event';
import { DragAndDropServiceDragContainerOutEvent } from './model/drag-and-drop-service-drag-container-out-event';

@Injectable()
export class DragAndDropService {
  private dropContainerContext: DragAndDropServiceDropContainerContext;
  private dragObjectContext: DragAndDropServiceDragObjectContext;

  constructor() {
    window.addEventListener(
      'mouseup',
      () => this.mouseup()
    );
    
    window.addEventListener(
      'mousemove',
      (event) => {
        this.mousemove(event)
    });
  }

  public OverDropContainer(option: {
    dropContainerContext: DragAndDropServiceDropContainerContext
  }): void {
    this.dropContainerContext = option.dropContainerContext;

    const dragObjectContext = this.dragObjectContext;
    if (dragObjectContext != null) {
      this.dropContainerContext
        .dragOverEvent({
          event: new DragAndDropServiceDragContainerDragOverEvent({
            accepted: this.dropContainerContext
              .predicate(dragObjectContext.data),
            dragObjectData: dragObjectContext.data
          })
        })
    }
  }

  public DropContainerDrop(): void {
    const dragObjectContext = this.dragObjectContext;
    if (dragObjectContext && this.dropContainerContext) {
      this.dropContainerContext
        .dropEvent({
          event: new DragAndDropServiceDragContainerDropEvent({
            dragObjectData: dragObjectContext.data,
            accepted: this.dropContainerContext
              .predicate(dragObjectContext.data)
          })
        });
    }

    this.dropContainerContext = null;
  }

  public OutDropContainer(): void {
    if (this.dropContainerContext)
    {
      this.dropContainerContext
        .outEvent({
          event: new DragAndDropServiceDragContainerOutEvent()
        })
    }
    this.dropContainerContext = null;
  }

  public StarDraggingObject(option: {
    dragObjectContext: DragAndDropServiceDragObjectContext
  }): void {
    this.dragObjectContext = option.dragObjectContext;
  }

  public DropDragObject(): void {
    const dropContainerContext = this.dropContainerContext;
    if (dropContainerContext && this.dragObjectContext) {
      this.dragObjectContext
        .dropEvent({
          event: new DragAndDropServiceDragObjectDropEvent({
            dropContainerData: dropContainerContext.data,
            accepted: this.dropContainerContext
              .predicate(dropContainerContext)
          })});
    }
    
    this.dragObjectContext = null;
  }

  @HostListener('document:mousemove', ['$event'])
  public mousemove(event: MouseEvent): void {
    if (this.dragObjectContext != null)
    {
      this.dragObjectContext
        .moveEvent({
          event: new DragAndDropServiceDragObjectMoveEvent({
            offsetX: event.offsetX,
            offsetY: event.offsetY
          })
        })
    }
  }

  @HostListener('document:mouseup', ['$event'])
  public mouseup() {
    this.DropDragObject();
    this.DropContainerDrop();
  }
}

