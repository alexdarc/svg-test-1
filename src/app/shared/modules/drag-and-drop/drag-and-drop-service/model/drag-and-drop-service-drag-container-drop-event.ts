import {DragAndDropServiceDragObjectContext} from './drag-and-drop-service-drag-object-context';

export class DragAndDropServiceDragContainerDropEvent {
  public readonly dragObjectContext: DragAndDropServiceDragObjectContext;
  public readonly accepted: boolean;

  constructor(option: {
    dragObjectContext: DragAndDropServiceDragObjectContext,
    accepted: boolean
  }) {
    this.dragObjectContext = option.dragObjectContext;
    this.accepted = option.accepted;
  }
}

