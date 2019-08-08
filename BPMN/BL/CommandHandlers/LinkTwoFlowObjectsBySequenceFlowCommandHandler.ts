import {ISequenceFlowMapper} from "../Mappers/ISequenceFlowMapper";
import {IFlowObjectMapper} from "../Mappers/IFlowObjectMapper";
import {UpdateInstruction} from "../UpdateInstruction";

class LinkTwoFlowObjectsBySequenceFlowCommandHandler
  implements ILinkTwoFlowObjectsBySequenceFlowCommandHandler{

  private readonly sequenceFlowMapper: ISequenceFlowMapper;
  private readonly flowObjectMapper: IFlowObjectMapper;

  constructor(
    sequenceFlowMapper: ISequenceFlowMapper,
    flowObjectMapper: IFlowObjectMapper) {
    this.sequenceFlowMapper = sequenceFlowMapper;
    this.flowObjectMapper = flowObjectMapper;
  }

  Handle(command: {
    flowObjectIdFrom: string;
    flowObjectIdTo: string }): void {

    const flowObjectFrom = this.flowObjectMapper.GetById(command.flowObjectIdFrom);
    const flowObjectTo = this.flowObjectMapper.GetById(command.flowObjectIdTo);

    let canLinkOutgoing = SequenceFlowConnectionRules.CanLinkOutgoingSequenceFlow({
      flowObject: flowObjectFrom});

    let canLinkIncoming = SequenceFlowConnectionRules.CanLinkIncomingSequenceFlow({
      flowObject: flowObjectTo});

    if (!canLinkOutgoing || !canLinkIncoming){
      throw Error(`Can't link flowObjectFrom: ${command.flowObjectIdFrom} with flowObjectTo: ${command.flowObjectIdTo}.`)
    }

    let sequenceFlow = this.sequenceFlowMapper.CreateAndGet({
      sourceId: command.flowObjectIdFrom,
      targetId: command.flowObjectIdTo});

    this.flowObjectMapper.Update({
      id: flowObjectFrom.Id,
      update: new UpdateInstruction({
        push: {
          OutgoingIds: sequenceFlow.Id
        }
      })
    });
    this.flowObjectMapper.Update({
      id: command.flowObjectIdTo,
      update: new UpdateInstruction({
        push: {
          IncomingIds: sequenceFlow.Id
        }
      })
    });


  }
}
