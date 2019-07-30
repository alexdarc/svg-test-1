export class DropEvent {
  acceptedDrop: boolean;

  constructor(option: {
    acceptedDrop: boolean
  }) {
    this.acceptedDrop = option.acceptedDrop;
  }
}
  