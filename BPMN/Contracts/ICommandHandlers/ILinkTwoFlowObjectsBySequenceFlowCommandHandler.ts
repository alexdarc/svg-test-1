interface ILinkTwoFlowObjectsBySequenceFlowCommandHandler{
  Handle(command: {
    flowObjectIdFrom: string,
    flowObjectIdTo: string}) : void;
}
