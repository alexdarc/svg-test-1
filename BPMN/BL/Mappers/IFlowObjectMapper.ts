import {UpdateInstruction} from "../UpdateInstruction";

export interface IFlowObjectMapper {
  Insert(flowObject: FlowObject) : void;
  GetById(id: string) : FlowObject;
  Update(option: { id: string, update: UpdateInstruction }): void;
  RemoveById(id: string) : void;
}
