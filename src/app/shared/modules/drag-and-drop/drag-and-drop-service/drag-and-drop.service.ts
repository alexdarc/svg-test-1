import { Injectable } from '@angular/core';
import { DragAndDropServiceDragAndDropContainerContext as DropContainerContext} from './model/drag-and-drop-service-drop-conatiner-context';
import { DragAndDropServiceDropObjectContext as DragObjectContext} from './model/drag-and-drop-service-drop-object-context';
import { DragAndDropServiceDraggingDropEvent } from './model/drag-and-drop-service-dragging-drop-event';
import { DragAndDropPosition } from '../drag-and-drop-positon';
import { DragAndDropServiceDraggingDragEvent } from './model/drag-and-drop-service-dragging-dragging-event';
import { DragAndDropServiceDropContainerDragOverEvent } from './model/drag-and-drop-service-drop-container-drag-object-over-container-event';

@Injectable()
export class DragAndDropService {

  private dropContainerContext: DropContainerContext;
  private dragObjectContext: DragObjectContext;

  constructor() {
    window.addEventListener(
      'mouseup',
      (event) => this.mouseup(event)
    );
    
    window.addEventListener(
      'mousemove',
      (event) => {
        this.mousemove(event)
    });
  }

  startDragging(dragObjectContext: DragObjectContext) {
    this.dragObjectContext = dragObjectContext;
  }

  public overDropContainer(
    dragAndDropContainerContext: DropContainerContext
  ) {
    this.dropContainerContext = dragAndDropContainerContext;
  }

  outDropContainer() {
    this.dropContainerContext = null;
  }

  mouseup(event: MouseEvent): any {
    if (this.dragObjectContext) {
      let acceptableDrop = false;
      let conatinerData:any = null;

      if (this.dropContainerContext) {
        conatinerData = this.dropContainerContext.dropContainerData ;
        acceptableDrop = this.dropContainerContext.predicate(this.dragObjectContext.dragObjectData)
      }

      this.dragObjectContext.dropCallback(
        new DragAndDropServiceDraggingDropEvent({
          position: new DragAndDropPosition({
            offsetX: event.offsetX,
            offsetY: event.offsetY
          }),
          startingPosition: this.dragObjectContext.startingPosition,
          acceptableDrop: acceptableDrop,
          containerData: conatinerData
        }))
    }
    
    this.dragObjectContext = null;
    this.dropContainerContext = null;
  }

  mousemove(event: MouseEvent) {
    if (this.dragObjectContext) {
      let acceptableDrop = false;
      let conatinerData:any = null;

      if (this.dropContainerContext) {
        conatinerData = this.dropContainerContext.dropContainerData;
        acceptableDrop = this.dropContainerContext.predicate(this.dragObjectContext.dragObjectData)

        this.dropContainerContext.dragOverCallback(
          new DragAndDropServiceDropContainerDragOverEvent({
            acceptableDrop: acceptableDrop,
            dragObjectData: this.dragObjectContext.dragObjectData
          })
        );
      }
      this.dragObjectContext.dragCallback(
        new DragAndDropServiceDraggingDragEvent({
          offsetX: event.offsetX,
          offsetY: event.offsetY,
          acceptableDrop: acceptableDrop,
          containerData: conatinerData
        }))
    }
  }
}

