export class DropContainerOverEvent {
  public readonly accepted: boolean;
  constructor(option: {accepted: boolean}) {
    this.accepted = option.accepted;
  }
}
