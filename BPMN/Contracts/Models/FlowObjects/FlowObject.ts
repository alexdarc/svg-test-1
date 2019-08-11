export class FlowObject {
  public readonly Id: string;
  public readonly IncomingIds: string[];
  public readonly OutgoingIds: string[];

  constructor(
    option: {
      id: string,
      incomingIds: string[],
      outgoingIds: string[]
    }){
    this.Id = option.id;
    this.IncomingIds = option.incomingIds;
    this.OutgoingIds = option.outgoingIds;
  }
}
