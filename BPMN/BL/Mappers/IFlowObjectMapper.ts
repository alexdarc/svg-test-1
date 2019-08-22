import {UpdateInstruction} from "../UpdateInstruction";
import {FlowObject} from "../../Contracts/Models/FlowObjects/FlowObject";

export interface IFlowObjectMapper {
  Insert(flowObject: FlowObject) : void;
  GetById(id: string) : FlowObject;
  Update(option: { id: string, update: UpdateInstruction }): void;
  RemoveById(id: string) : void;
}
