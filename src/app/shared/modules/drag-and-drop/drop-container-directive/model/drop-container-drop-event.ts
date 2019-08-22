export class DropContainerDropEvent {
  
  public dragObjectData: any;
  public acceptableDrop: boolean;

  constructor(option: {
    acceptableDrop: boolean
    dragObjectData: any
  }) {
    this.acceptableDrop = option.acceptableDrop;
    this.dragObjectData = option.dragObjectData;
  }
}