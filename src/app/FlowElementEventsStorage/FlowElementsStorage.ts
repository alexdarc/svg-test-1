import { IFlowElementsStorage } from './IFlowElementsStorage';
import { IFlowElement } from '../board/shared/models/flow-element.model';
import { IDatabase } from '../board/shared/models/database.model';
import { ICoords } from '../board/shared/models/coords.model';
import { FlowNode } from './../board/shared/models/flow-node.model';
import { SequenceFlow } from '../board/elements/sequence-flow/sequence-flow.model';
import { UpdateInstruction } from '../BL/UpdateInstruction';

export class FlowElementsStorage
  implements IFlowElementsStorage {

  flowElements: IFlowElement[] = [];

  constructor(private db: IDatabase) {
    this.db
      .getEvents()
      .subscribe((flowElements: IFlowElement[]) => {
        this.flowElements = flowElements;
      });
  }

  public Push(option: { flowElement: IFlowElement }): void {
    this.flowElements
      .push(option.flowElement);
  }

  public Remove(option: { id: string; }): void {
    this.flowElements = this.flowElements
      .filter(
        (el) => el.id !== option.id
      );
  }

  public Get(): IFlowElement[] {
    return this.flowElements;
  }

  public GetById(option: { id: string; }): IFlowElement {
    return this.flowElements
      .find(
        (el) => el.id === option.id
      );
  }

  public Update(option: { id: string, update: UpdateInstruction }): void {
    const flowElement: IFlowElement = this.GetById({ id: option.id });
    for (const key of option.update.set) {
      flowElement[key] = option.update.set[key];
    }
  }
}
