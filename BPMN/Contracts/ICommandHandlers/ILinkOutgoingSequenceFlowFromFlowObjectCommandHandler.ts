interface ILinkOutgoingSequenceFlowFromFlowObjectCommandHandler{
  Handle(command: {
    sequenceFlowId: string,
    flowObjectId: string}) : void;
}
