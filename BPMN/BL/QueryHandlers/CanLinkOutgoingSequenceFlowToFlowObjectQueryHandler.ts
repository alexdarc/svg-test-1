import {ICanLinkOutgoingSequenceFlowToFlowObjectQueryHandler} from "../../Contracts/IQueryHandlers/ICanLinkOutgoingSequenceFlowToFlowObjectQueryHandler";
import {IFlowObjectMapper} from "../Mappers/IFlowObjectMapper";
import {SequenceFlowConnectionRules} from "../ConnectionRules/SequenceFlowConnectionRules";

export class CanLinkOutgoingSequenceFlowToFlowObjectQueryHandler
  implements ICanLinkOutgoingSequenceFlowToFlowObjectQueryHandler{

  private readonly flowObjectMapper: IFlowObjectMapper;

  constructor(option: {
    flowObjectMapper: IFlowObjectMapper}) {
    this.flowObjectMapper = option.flowObjectMapper;
  }

  Handle(query: {
    flowObjectId: string
  }): boolean {
    const flowObject = this.flowObjectMapper.GetById(query.flowObjectId);
    return SequenceFlowConnectionRules.CanLinkOutgoingSequenceFlow({
      flowObject});
  }
}
