import { DragAndDropServiceDragObjectContex } from './drag-and-drop-service-drag-object-contex';

export class DragAndDropServiceDragContainerDropEvent {
  public readonly dropObject: any;
  public readonly accepted: boolean;

  constructor(option: {
    dropObject: DragAndDropServiceDragObjectContex,
    accepted: boolean
  }) {
    this.dropObject = option.dropObject;
    this.accepted = option.accepted;
  }
}
