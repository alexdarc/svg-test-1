import {Injectable} from "@angular/core";
import {FlowObjectMapper} from "../../BPMN/Infrastructure/FlowObjectMapper";
import {CanLinkOutgoingSequenceFlowToFlowObjectQueryHandler} from "../../BPMN/BL/QueryHandlers/CanLinkOutgoingSequenceFlowToFlowObjectQueryHandler";

@Injectable({
  providedIn: 'root',
})
export class DependencyContainer {
  public readonly canLinkOutgoingSequenceFlowToFlowObjectQueryHandler: CanLinkOutgoingSequenceFlowToFlowObjectQueryHandler;

  constructor(){
    const flowObjectMapper = new FlowObjectMapper();
    this.canLinkOutgoingSequenceFlowToFlowObjectQueryHandler = new CanLinkOutgoingSequenceFlowToFlowObjectQueryHandler({
      flowObjectMapper
    });
  }
}
