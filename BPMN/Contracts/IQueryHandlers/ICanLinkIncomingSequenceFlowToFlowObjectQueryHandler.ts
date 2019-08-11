export interface ICanLinkIncomingSequenceFlowToFlowObjectQueryHandler {
  Handle(query: {
    flowObjectId: string
  }) : boolean;
}
