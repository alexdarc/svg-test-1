export class DragAndDropServiceDragObjectDropEvent {
  public readonly dropContainerData: any;
  public readonly accepted: boolean;

  constructor(option: {
    dropContainerData: any,
    accepted: boolean
  }) {
    this.dropContainerData = option.dropContainerData;
    this.accepted = option.accepted;
  }
}
