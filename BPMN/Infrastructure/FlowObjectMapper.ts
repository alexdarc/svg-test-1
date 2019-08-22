import {IFlowObjectMapper} from "../BL/Mappers/IFlowObjectMapper";
import {UpdateInstruction} from "../BL/UpdateInstruction";
import {FlowObject} from "../Contracts/Models/FlowObjects/FlowObject";
import {BPMNEvent} from "../Contracts/Models/FlowObjects/Events/Event";
import {EventType} from "../Contracts/Models/FlowObjects/Events/EventType";

export class FlowObjectMapper implements IFlowObjectMapper {
  GetById(id: string): FlowObject {
    if (id === "EndEvent_1c03rye")
    {
      return new BPMNEvent({id: id, incomingIds: [], outgoingIds: [], eventType: EventType.End})
    }
    return undefined;
  }

  Insert(flowObject: FlowObject): void {
  }

  RemoveById(id: string): void {
  }

  Update(option: { id: string; update: UpdateInstruction }): void {
  }

}
