export class DropContainerOverEvent {
  public readonly acceptableDrop: boolean;
  public readonly dragObjectData: any;

  constructor(option: {
    acceptableDrop: boolean,
    dragObjectData: any
  }) {
    this.acceptableDrop = option.acceptableDrop;
    this.dragObjectData = option.dragObjectData;
  }
}