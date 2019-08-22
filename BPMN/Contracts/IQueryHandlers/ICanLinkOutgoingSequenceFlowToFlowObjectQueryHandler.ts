export interface ICanLinkOutgoingSequenceFlowToFlowObjectQueryHandler {
  Handle(query: {
    flowObjectId: string
  }) : boolean;
}
