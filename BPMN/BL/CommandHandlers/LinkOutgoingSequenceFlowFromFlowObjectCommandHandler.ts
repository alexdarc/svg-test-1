import {ISequenceFlowMapper} from '../Mappers/ISequenceFlowMapper';
import {IFlowObjectMapper} from '../Mappers/IFlowObjectMapper';
import {UpdateInstruction} from '../UpdateInstruction';

class LinkOutgoingSequenceFlowFromFlowObjectCommandHandler
  implements ILinkOutgoingSequenceFlowFromFlowObjectCommandHandler {

  private readonly sequenceFlowMapper: ISequenceFlowMapper;
  private readonly flowObjectMapper: IFlowObjectMapper;

  constructor(
    sequenceFlowMapper: ISequenceFlowMapper,
    flowObjectMapper: IFlowObjectMapper) {
    this.sequenceFlowMapper = sequenceFlowMapper;
    this.flowObjectMapper = flowObjectMapper;
  }

  // todo: it should be a transaction
  Handle(command: {
    sequenceFlowId: string;
    flowObjectId: string }): void {
    const sequenceFlow = this.sequenceFlowMapper.GetById(command.sequenceFlowId);
    const flowObject = this.flowObjectMapper.GetById(command.flowObjectId);

    const canLink = SequenceFlowConnectionRules.CanLinkOutgoingSequenceFlow({
      flowObject});

    if (!canLink) {
      throw Error(`Can't link sequenceFlow: ${command.sequenceFlowId} with flowObject: ${command.flowObjectId}.`)
    }

    const previousFlowObject = this.flowObjectMapper.GetById(sequenceFlow.TargetId);
    this.flowObjectMapper.Update({
      id: previousFlowObject.Id,
      update: new UpdateInstruction({
        pop: {
          OutgoingIds: command.sequenceFlowId
        }
      })
    });
    this.sequenceFlowMapper.Update({
      id: command.sequenceFlowId,
      update: new UpdateInstruction({
        set: {
          TargetId: command.flowObjectId
        }
      })
    });
    this.flowObjectMapper.Update({
      id: command.flowObjectId,
      update: new UpdateInstruction({
        push: {
          OutgoingIds: command.sequenceFlowId
        }
      })
    });
  }
}
