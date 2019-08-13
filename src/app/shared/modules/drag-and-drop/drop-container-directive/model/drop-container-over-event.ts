export class DropContainerOverEvent {
  public readonly accepted: boolean;
  public readonly dragObjectData: any;

  constructor(option: {
    accepted: boolean
    dragObjectData: any
  }) {
    this.accepted = option.accepted;
    this.dragObjectData = option.dragObjectData;
  }
}
