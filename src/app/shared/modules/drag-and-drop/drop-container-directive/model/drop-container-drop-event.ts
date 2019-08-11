export class DropContainerDropEvent {
  public readonly acceptedDrop: boolean;
  public readonly dragObjectData: any;

  constructor(option: {
    acceptedDrop: boolean,
    dragObjectData: any
  }) {
    this.acceptedDrop = option.acceptedDrop;
    this.dragObjectData = option.dragObjectData;
  }
}
