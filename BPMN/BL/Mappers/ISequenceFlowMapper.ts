import {UpdateInstruction} from "../UpdateInstruction";

export interface ISequenceFlowMapper {
  Insert(flowObject: SequenceFlow) : void;
  CreateAndGet(option: {sourceId: string, targetId: string}) : SequenceFlow;
  GetById(id: string) : SequenceFlow;
  Update(option: { id: string, update: UpdateInstruction }): void;
  RemoveById(id: string) : void;
}
