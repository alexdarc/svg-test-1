import { DragAndDropServiceDropContainerDropEvent as DropContainerDropEvent} from './drag-and-drop-service-drop-container-drop-event';
import { DragAndDropServiceDropContainerDragOverEvent as DropContainerDragOverEvent} from './drag-and-drop-service-drop-container-drag-object-over-container-event';

export class DragAndDropServiceDragAndDropContainerContext {
  public readonly dropContainerData: any;
  public readonly predicate: (data: any) => boolean;
  public readonly dropCallback: (event: DropContainerDropEvent) => void;
  public readonly dragOverCallback: (event: DropContainerDragOverEvent) => void;

  constructor(option: {
    data: any,
    predicate: (data: any) => boolean,
    dropCallback: (event: DropContainerDropEvent) => void,
    dragOverCallback: (event: DropContainerDragOverEvent) => void
  }) {
    this.dropContainerData = option.data;
    this.predicate = option.predicate;
    this.dropCallback = option.dropCallback;
    this.dragOverCallback = option.dragOverCallback;
  }

}