import { IFlowElement } from './../board/shared/models/flow-element.model';

export interface IFlowElementsStorage {
  Push(flowElement: IFlowElement): void;
  Remove(option: { id: string } ): void;
  Get(): IFlowElement[];
}
