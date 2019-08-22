import {FlowObject} from "../../Contracts/Models/FlowObjects/FlowObject";
import {BPMNEvent} from "../../Contracts/Models/FlowObjects/Events/Event";
import {EventType} from "../../Contracts/Models/FlowObjects/Events/EventType";

export class SequenceFlowConnectionRules {

  public static CanLinkIncomingSequenceFlow(
    option: {
      flowObject: FlowObject}) : boolean {
    if (option.flowObject instanceof BPMNEvent){
      if ((option.flowObject as BPMNEvent).EventType == EventType.Start){
        return false;
      }
    }

    return true;
  }

  public static CanLinkOutgoingSequenceFlow(
    option: {
      flowObject: FlowObject}) : boolean {
    if (option.flowObject instanceof BPMNEvent){
      if ((option.flowObject as BPMNEvent).EventType == EventType.End){
        return false;
      }
    }

    return true;
  }
}
