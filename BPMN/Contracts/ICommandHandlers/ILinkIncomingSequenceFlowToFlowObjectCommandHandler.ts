interface ILinkIncomingSequenceFlowToFlowObjectCommandHandler{
  Handle(command: {
    sequenceFlowId: string,
    flowObjectId: string}) : void;
}
