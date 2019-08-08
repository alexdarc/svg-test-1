import { IFlowElement } from './../board/shared/models/flow-element.model';
import { ICoords } from '../board/shared/models/coords.model';
import { UpdateInstruction } from '../BL/UpdateInstruction';

export interface IFlowElementsStorage {
  Push(option: { flowElement: IFlowElement }): void;
  Remove(option: { id: string } ): void;
  Get(): IFlowElement[];
  GetById(option: { id: string; }): IFlowElement
  Update(option: { id: string, update: UpdateInstruction }): void;
}
