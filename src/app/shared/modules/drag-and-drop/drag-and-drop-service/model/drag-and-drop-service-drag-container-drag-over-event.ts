export class DragAndDropServiceDragContainerDragOverEvent {
  public readonly dragObjectData: any;
  public readonly accepted: boolean;

  constructor(option: {
    dragObjectData: any,
    accepted: boolean
  }) {
    this.dragObjectData = option.dragObjectData;
    this.accepted = option.accepted;
  }
}

