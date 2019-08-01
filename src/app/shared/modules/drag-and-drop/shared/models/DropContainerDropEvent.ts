export class DropContainerDropEvent {
  acceptedDrop: boolean;

  constructor(option: {
    acceptedDrop: boolean
  }) {
    this.acceptedDrop = option.acceptedDrop;
  }
}
