import {ICanLinkIncomingSequenceFlowToFlowObjectQueryHandler} from "../../Contracts/IQueryHandlers/ICanLinkIncomingSequenceFlowToFlowObjectQueryHandler";
import {IFlowObjectMapper} from "../Mappers/IFlowObjectMapper";
import {SequenceFlowConnectionRules} from "../ConnectionRules/SequenceFlowConnectionRules";

export class CanLinkIncomingSequenceFlowToFlowObjectQueryHandler
  implements ICanLinkIncomingSequenceFlowToFlowObjectQueryHandler{

  private readonly flowObjectMapper: IFlowObjectMapper;

  constructor(flowObjectMapper: IFlowObjectMapper) {
    this.flowObjectMapper = flowObjectMapper;
  }

  Handle(query: {
    flowObjectId: string
  }): boolean {
    const flowObject = this.flowObjectMapper.GetById(query.flowObjectId);
    return SequenceFlowConnectionRules.CanLinkIncomingSequenceFlow({
      flowObject});
  }

}
